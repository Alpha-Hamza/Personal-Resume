/* eslint-disable @next/next/no-img-element */
import Header from "./Header";

export default function TopSection() {
  return (
    
      <div className="bg-[url('/Images/Hi3.png')] bg-center bg-no-repeat bg-opacity-[0%] bg-cover">
        <div className=" mx-auto container 2xl:w-full xl:w-[90%] lg:w-[90%] w-[90%]    ">
      <Header />
      <div className="flex  xl:mt-[126px] sm:mt-[90px] mt-[50px]">
        <div className="xl:w-[558px] lg:w-[431px] md:w-[307px] sm:w-[275px]   ml-[5%]">
          <h1 className="sm:text-[20px] text-[16px] ">
            Hola! I’m <br />
            <span className="md:text-[32px] sm:text-[28px] text-[22px] font-bold text-[#FD5956] lg:leading-[70px] ">
              Abrar Ahmed
            </span>
          </h1>
          <h1 className="2xl:text-[100px] xl:text-[90px]  lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px] leading-0">Creative</h1>
          <h1 className="2xl:text-[100px] xl:text-[90px]  lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px]  sm:text-right leading-0 sm:pl-10 lg:-mt-10 sm:-mt-5 -mt-4">
            Designer<span className=" text-[#FD5956]">.</span>
          </h1>
          <p className="xl:mt-[12px] lg:mt-[3px] xl:text-[20px] lg:text-[16px] sm:text-[14px] text-[12px]">
            Since creative designers often interact with creative teams,
            managers and clients, they need strong communication skills.
          </p>
          <div className="flex  xl:space-x-[45px] lg:space-x-[25px] space-x-[20px] xl:mt-[35px] mt-[13px]">
            <img src="./Images/Fi1.svg" alt=" " className="" />
            <img src="./Images/Fi2.svg" alt=" " className="" />
            <img src="./Images/Fi3.svg" alt=" " className="" />
            <img src="./Images/Fi4.svg" alt=" " className="" />
          </div>
          <button className=" xl:text-[18px] lg:text-[16px] text-[14px] xl:mt-[33px] mt-[16px] relative  cursor-pointer bg-[#FD5956]  hover:bg-white  hover:bg-opacity-[20%] xl:w-[188px] lg:w-[131px] w-[109px] h-[52px]    font-semibold text-[#FFFEFD]  ">
            CV Here
          </button>
        </div>
        <div>
          <div className="flex   ">
            <img src="./Images/Hi2.svg" alt=" " className=" sm:block hidden  2xl:w-full xl:w-[80%] md:w-[90%] w-[89%] 2xl:-ml-[48%] xl:-ml-[64%] lg:-ml-[71%] md:-ml-[73%] -ml-[73%] 2xl:mt-[35%] xl:mt-[60%] lg:mt-[97%] md:mt-[88%] mt-[102%]  " />
            
            <img src="./Images/Hi.png" alt=" " className="2xl:w-full xl:w-[80%] md:w-[90%] sm:w-[89%] w-full " />
          </div>
        </div>
      </div>
      
      </div>
      
      </div>
      
   
  );
}
