/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <div className="mx-auto  container    relative flex   justify-between items-center      ">
      <img src="./Images/Hlogo.svg" alt=" " className=" py-5  " />
      <div className="  flex   justify-center space-x-[50px]   items-center  ">
        <button className="cursor-pointer text-[18px]  focus:border-b-2 border-[#FD5956]  text-[#FD5956] ">
          Home
        </button>

        <button className="cursor-pointer text-[18px]  focus:border-b-2 border-[#FD5956]  ">
          Contributors
        </button>

        <button className="cursor-pointer text-[18px]  focus:border-b-2 border-[#FD5956] ">
          About me
        </button>
        <button className="cursor-pointer text-[18px]  focus:border-b-2 border-[#FD5956] ">
          Services
        </button>
        <button className="cursor-pointer text-[18px]  focus:border-b-2 border-[#FD5956] ">
          Portfolio
        </button>
        <button className="cursor-pointer text-[18px]  focus:border-b-2 border-[#FD5956] ">
          Contact
        </button>
      </div>
      <button className=" relative  cursor-pointer bg-[#000000]  hover:bg-white  hover:bg-opacity-[20%] w-[188px] h-[52px]    font-semibold text-[#FFFEFD] text-[18px] ">
        Portfolio Here
      </button>
    </div>
  );
}
