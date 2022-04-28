/* eslint-disable @next/next/no-img-element */
import Header from "./Header";

export default function TopSection() {
  return (
    <div className=" mx-auto container  ">
      <Header />
      <div className="flex space-x-[286px] mt-[126px]">
        <div className="w-[558px]  ml-[5%]">
          <h1 className="text-[20px] ">
            Hola! I’m <br />
            <span className="text-[32px] font-bold text-[#FD5956] leading-[70px] ">
              Abrar Ahmed
            </span>
          </h1>
          <h1 className="text-[100px] leading-0">Creative</h1>
          <h1 className="text-[100px] text-right leading-0">
            Designer<span className=" text-[#FD5956]">.</span>
          </h1>
          <p className="mt-[12px]">
            Since creative designers often interact with creative teams,
            managers and clients, they need strong communication skills.
          </p>
          <div className="flex  space-x-[45px] mt-[35px]">
            <img src="./Images/Fi1.svg" alt=" " className="" />
            <img src="./Images/Fi2.svg" alt=" " className="" />
            <img src="./Images/Fi3.svg" alt=" " className="" />
            <img src="./Images/Fi4.svg" alt=" " className="" />
          </div>
          <button className=" mt-[33px] relative  cursor-pointer bg-[#FD5956]  hover:bg-white  hover:bg-opacity-[20%] w-[188px] h-[52px]    font-semibold text-[#FFFEFD] text-[18px] ">
            CV Here
          </button>
        </div>
        <div>
          <div className="flex   ">
            {/* <img src="./Images/Hi2.png" alt=" " className=" " /> */}

            <img src="./Images/Hi.png" alt=" " className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
