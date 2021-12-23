import React from "react";
type Post = { id: number; title: string; text: string };
interface Props {
  posts: Post[];
}
const StaticProps = ({ posts }: Props) => {
  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <div>{item.text}</div>
            <div>{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaticProps;

export async function getStaticProps(context: any) {
  let posts = await new Promise((resolve, reject) => {
    resolve([
      { id: 1, title: "타이틀", text: "ddd" },
      { id: 2, title: "타이틀", text: "ddd" },
      { id: 3, title: "타이틀", text: "ddd" },
    ]);
  });

  return {
    props: {
      posts,
    },
  };
}

// 그냥 여기서 반환한 값이 해당 컴포넌트로 들어가는건가;;?
