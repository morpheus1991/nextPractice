import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {allPostsData.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
          {post.title}
          <br />
          {post.date}
          <br />
        </li>
      ))}

      <section className="flex flex-wrap flex-col items-center text-orange-200">
        <p className="w-60 text-left ">your self introduction</p>
        <p className="w-60 text-left">
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
