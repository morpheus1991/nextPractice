import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");
// cwd 현재 작업 디렉토리 반환 / posts

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  //디렉토리 읽음,
  const allPostsData = fileNames.map((fileName) => {
    //파일들 순회하면서 아래 작업
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");
    //.md만 제거하여 id로 할당

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    //파일명경로
    const fileContents = fs.readFileSync(fullPath, "utf8");
    //파일을 utf8로 읽음
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // matter에 해당 콘텐츠를 넣어서 처리받고 반환 (처리???)
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
