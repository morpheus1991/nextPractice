import React from "react";

const Pactice = () => {
  return (
    <div>
      <ul>
        <li className="group">
          aa
          <div className="hidden group-hover:odd:flex group">
            dd
            <div className="hidden group-hover:odd:flex">aaaa</div>
          </div>
        </li>
      </ul>
      {/* <input type="input" class="rounded text-pink-500 form-input" /> */}
      <div className="flex w-full min-h-[20px] bg-green-800">
        <nav className="w-[1028px] bg-fuchsia-50 mx-auto">
          <ul className="flex justify-center space-x-8">
            <li className="group w-20">
              menu1
              <ul className="group-hover:flex hidden flex-wrap">
                <li className="w-full group">
                  menu2
                  <ul className="only:text-red-800 group-hover:flex hidden flex-wrap">
                    <li className="w-full ">
                      menu3
                      <ul className="group-hover:flex hidden flex-wrap">
                        <li className="w-full ">menu4</li>
                        <li className="w-full">menu4</li>
                        <li className="w-full">menu4</li>
                      </ul>
                    </li>
                    <li className="w-full">menu3</li>
                    <li className="w-full">menu3</li>
                  </ul>
                </li>
                <li className="w-full">menu2</li>
                <li className="w-full">menu2</li>
              </ul>
            </li>
            <li className="group w-20">
              menu1
              <ul className=">group-hover:flex hidden flex-wrap">
                <li className="w-full group">menu2</li>
                <li className="w-full">menu2</li>
                <li className="w-full">menu2</li>
              </ul>
            </li>
            <li className="group w-20">
              menu1
              <ul className=">group-hover:flex hidden flex-wrap">
                <li className="w-full group">menu2</li>
                <li className="w-full">menu2</li>
                <li className="w-full">menu2</li>
              </ul>
            </li>
            <li className="group w-20">
              menu1
              <ul className="group-hover:flex hidden flex-wrap">
                <li className="w-full group">menu2</li>
                <li className="w-full">menu2</li>
                <li className="w-full">menu2</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className=" sm:w-[calc(100%-2rem)] w-full  mx-auto bg-green-800 h-4"></div> */}
      <div className="text-center">#추천테마</div>
      <p className="text-center">
        이슈별, 테마별 차량을 쉽고 간편하게~ 엠파크 추천테마차량 모음
      </p>
      <ul className="flex lg:max-w-[1024px]  m-auto mt-16 md:max-w-[700px] md:flex-wrap">
        <li className="max-w-[256px] border-2 border-l border-r border-y border-gray-200 relative flex flex-wrap flex-col justify-between items- px-4 py-10 md:mt-8">
          <h3 className="absolute translate-reverse-y-hlaf font-thin text-sm left-0 right-0 mx-auto w-[206px] top-0 bg-zinc-800 rounded-md text-white text-center h-6 flex items-center justify-center">
            상위1%딜러+고객불만족0건
          </h3>
          <div className="flex flex-col flex-wrap">
            <img className="w-full h-22" src="/images/p1.png"></img>
            <strong className="flex justify-center">#인증딜러차량</strong>
            <p className="mt-1 justify-center">
              힘든 중고차 구매! 인증딜러와 상의하시면 거래의 편안함을 느끼실 수
              있습니다
            </p>
          </div>
          <div className=" h-28">
            <div className="flex justify-center">
              <button className="w-44 border-2 border-gray-400 h-12 text-center rounded-full  hover:bg-gray-50 ">
                차량 92대 보기
              </button>
            </div>
            <div className="flex justify-center mt-2 ">
              <button className="w-44 border-2 h-12 text-center rounded-full bg-green-800 hover:bg-green-900 text-white">
                서비스 자세히보기
              </button>
            </div>
          </div>
        </li>
        <li className="max-w-[256px] border-2 border-l border-r border-y border-gray-200 relative flex flex-wrap flex-col justify-between items- px-4 py-10 md:mt-8">
          <h3 className="absolute translate-reverse-y-hlaf font-thin text-sm left-0 right-0 mx-auto w-[206px] top-0 bg-zinc-800 rounded-md text-white text-center">
            헛걸음시100만원 보상!
          </h3>
          <div>
            <img className="w-full h-22" src="/images/p1.png"></img>
            <strong>#헛걸음보상제</strong>
            <p>
              방문 예약 후, 해당차량이 없을 경우 100만원을 보상해 드리는
              차량입니다.
            </p>
          </div>
          <div className="">
            <div>
              <button className="mt-7 w-44 border-2 h-12 text-center rounded-full bg-green-800 hover:bg-green-900 text-white">
                차량 92대 보기
              </button>
            </div>
            <div>
              <button className="mt-7 w-44 border-2 border-gray-400 h-12 text-center rounded-full  hover:bg-gray-50 ">
                서비스 자세히보기
              </button>
            </div>
          </div>
        </li>
        <li className="max-w-[256px] border-2 border-l border-r border-y border-gray-200 relative flex flex-wrap flex-col justify-between items- px-4 py-10 md:mt-8">
          <h3 className="absolute translate-reverse-y-hlaf font-thin text-sm left-0 right-0 mx-auto w-[206px] top-0 bg-zinc-800 rounded-md text-white text-center">
            유류비 저렴한 LPG차량
          </h3>
          <div>
            <img className="w-full h-22" src="/images/p1.png"></img>
            <strong>#누구나구매가능 LPG</strong>
            <p>누구나 구매 가능한 유류비 저렴한 LPG 차량만 선별했습니다.</p>
          </div>
          <div className="">
            <div>
              <button className="mt-7 w-44 border-2 h-12 text-center rounded-full bg-green-800 hover:bg-green-900 text-white">
                차량 92대 보기
              </button>
            </div>
            <div>
              <button className="mt-7 w-44 border-2 border-gray-200 h-12 text-center rounded-full  hover:bg-gray-50 ">
                서비스 자세히보기
              </button>
            </div>
          </div>
        </li>
        <li className="max-w-[256px] border-2 border-l border-r border-y border-gray-200 relative flex flex-wrap flex-col justify-between items- px-4 py-10 md:mt-8">
          <h3 className="absolute translate-reverse-y-hlaf font-thin text-sm left-0 right-0 mx-auto w-[206px] top-0 bg-zinc-800 rounded-md text-white text-center">
            최저가격+무사고 차량
          </h3>
          <div>
            <img className="w-full h-22" src="/images/p1.png"></img>
            <strong>#BEST PRICE</strong>
            <p>
              엠파크와 딜러가 협약하여 최저가격의 무사고 차량만 엄선하여 추천해
              드립니다.
            </p>
          </div>
          <div className="">
            <div>
              <button className="mt-7 w-44 border-2 h-12 text-center rounded-full bg-green-800 hover:bg-green-900 text-white">
                차량 92대 보기
              </button>
            </div>
            <div>
              <button className="mt-7 w-44 border-2 border-gray-200 h-12 text-center rounded-full  hover:bg-gray-50 ">
                서비스 자세히보기
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Pactice;
