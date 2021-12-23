import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const name = "Aiden";
export const siteTitle = "next.js sample website";
const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home: boolean;
}) => {
  console.log(children);

  return (
    <div className="sw-full group  mx-auto  w-1/2 ">
      <div className="relative py-20 mt-20 w-full px-10 bg-slate-800  group-hover:opacity-100 mx-auto transition-all transition-duration: 1000ms ease-in-out rounded-lg shadow-slate-800 shadow-lg h-[40rem]">
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
            <div className="flex justify-center flex-wrap ">
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
            <div className="text-slate-300">
              <Link href="/">{name}</Link>
            </div>
          )}
        </header>
        <main className="text-slate-700 mt-8">{children}</main>
        {!home && (
          //   홈이 없다면
          <div className="text-3xl absolute bottom-4 right-4 text-white">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Layout;

//children 인자로 다수의 jsx들어오기 가능
