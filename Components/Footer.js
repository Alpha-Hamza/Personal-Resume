/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <div className="mx-auto container mt-[155px] pb-10  ">
      <img src="./Images/Fi.svg" alt=" " className="mx-auto" />
      <h1 className="text-[#FD5956] sm:text-[65px] text-[50px] text-center mt-[151.37px]">
        Contact.
      </h1>
      <p className=" md:text-[20px] sm:text-[18px] text-[15px] leading-[30px] text-center mt-[20px] lg:w-[875px] md:w-[96%] sm:w-[86%] w-[93%]  mx-auto">
        Truth is a deep kindness that teaches us to be content in our everyday
        life and share with the people the same happiness. the feeling of sunday
        is the same everywhere: heavy, melancholy, standing still.
      </p>
      <img src="./Images/Flogo.svg" alt=" " className="mt-[120px] mx-auto sm:w-auto w-[50%]" />
      <div className="flex justify-center space-x-[45px] mt-[114px]">
        <img src="./Images/Fi1.svg" alt=" " className="" />
        <img src="./Images/Fi2.svg" alt=" " className="" />
        <img src="./Images/Fi3.svg" alt=" " className="" />
        <img src="./Images/Fi4.svg" alt=" " className="" />
      </div>
      <p className="sm:text-[20px] text-[15px] text-center mt-[66px]">
        © 2021 AbbVie Inc. . All rights reserved
      </p>
    </div>
  );
}
