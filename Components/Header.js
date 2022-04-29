/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="mx-auto  container    relative flex   justify-between items-center      ">
      <img src="./Images/Hlogo.svg" alt=" " className=" py-5  " />
      <div className=" sm:flex hidden     justify-center xl:space-x-[50px] lg:space-x-[30px] md:space-x-[15px] space-x-[10px] xl:text-[18px]  lg:text-[16px] md:text-[14px] text-[12px] items-center   ">
        <button className="cursor-pointer   focus:border-b-2 border-[#FD5956]  text-[#FD5956] ">
          Home
        </button>

        <button className="cursor-pointer   focus:border-b-2 border-[#FD5956]  ">
          Contributors
        </button>

        <button className="cursor-pointer  focus:border-b-2 border-[#FD5956] ">
          About me
        </button>
        <button className="cursor-pointer   focus:border-b-2 border-[#FD5956] ">
          Services
        </button>
        <button className="cursor-pointer   focus:border-b-2 border-[#FD5956] ">
          Portfolio
        </button>
        <button className="cursor-pointer  focus:border-b-2 border-[#FD5956] ">
          Contact
        </button>
      </div>
      <button className=" relative xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px]  cursor-pointer bg-[#000000]  hover:bg-white  hover:bg-opacity-[20%] xl:w-[188px] lg:w-[131px] md:w-[109px] w-[92px] h-[52px]    font-semibold text-[#FFFEFD] ] ">
        Portfolio Here
      </button>
    </div>
  );
}
