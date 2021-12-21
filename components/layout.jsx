import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const name = "Aiden";
export const siteTitle = "next.js sample website";
const Layout = ({ children, home }) => {
  console.log(children);

  return (
    <div className="bg-orange-600 w-1/3 mx-auto shadow-lg shadow-orange-800 py-20 mt-20 rounded-lg">
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        {/* 디스크립션, 사이트 소개글 */}
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        {/* 이미지, 아마도 sns복사 붙여넣기 시 나오는 오픈그래프 썸네일인듯 */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <div className="flex justify-center flex-wrap">
            <Image
              priority
              src="/images/profile.jpeg"
              className="rounded-full w-full"
              height="144"
              width="144"
              alt={name}
            />
            <h1 className="w-full flex justify-center text-xl my-4 text-white text-5xl">
              {name}
            </h1>
          </div>
        ) : (
          <div>
            <Link href="/">{name}</Link>
          </div>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        //   홈이 없다면
        <div className="">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Layout;

//children 인자로 다수의 jsx들어오기 가능
