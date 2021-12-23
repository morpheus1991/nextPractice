import Head from "next/head";
import React, { useState } from "react";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  const [numbers, setNumbers] = useState(null);
  const getNumbers = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/randomNumbers", requestOptions)
      .then((response) => response.json())
      .then((result) => setNumbers(result.numbers.join(", ")))
      .catch((error) => console.log("error", error));
  };
  return (
    <Layout>
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
        <button onClick={getNumbers}>숫자 받아오기</button>
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
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
