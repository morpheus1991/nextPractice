import Head from "next/head";
import React, { useState } from "react";
import { PostData } from "..";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

interface Props {
  postData: PostData;
}
export default function Post({ postData }: Props) {
  const [numbers, setNumbers] = useState(null);
  console.log(postData);
  // const getNumbers = () => {
  //   var requestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };

  //   fetch("http://localhost:3000/api/randomNumbers", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => setNumbers(result.numbers.join(", ")))
  //     .catch((error) => console.log("error", error));
  // };
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="text-white">
        <div className=" text-3xl">{postData.title}</div>
        <br />
        <Date dateString={postData.date}></Date>
        {postData.id}
        <br />
        {numbers && <div>{numbers}</div>}
        {/* <button onClick={getNumbers}>숫자 받아오기</button> */}
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
type Params = {
  id: string;
};
interface Props {
  params: Params;
}
export async function getStaticProps({ params }: Props) {
  const postData = getPostData(params.id);
  console.log("ddd");
  console.log("ddd");

  console.log("ddd");

  console.log("paranms", params);
  return {
    props: {
      postData,
    },
  };
}
