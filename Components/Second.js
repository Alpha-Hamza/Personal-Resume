/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

export default function Second() {
  return (
    <div className=" mt-[155px] relative   ">
      <div className="mx-auto container 2xl:w-full w-[90%]  ">
        <h1 className="text-[65px] text-center">
          About me<span className="text-[#FD5956]">.</span>
        </h1>
        <p className="leading-[30px] w-[875px] text-center mx-auto">
          I'm Justin Vaccaro and i do web design, Graphic Design, User
          Experiences. habitant et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet.
        </p>
        <div>
        <div className="relative  flex ">
        <img src="./Images/Si.svg" alt=" " className="mt-[42px] absolute" />
      <img src="./Images/Si1.png" alt=" " className=" mx-auto w-[90%]  pb-60 -mt-10 " />
      <div className="absolute -top-20 z-[1]">

      <img src="./Images/Si2.png" alt=" " className=" mx-auto my-auto w-[46%] mt-10   " />
      </div>
      
    
      </div>
        </div>
      </div>

      {/* <div className=" mx-auto container bg-[url('/Images/Si1.png')] bg-center bg-no-repeat flex justify-center items-center -mt-[25rem] ">
        <img src="./Images/Si2.png" alt=" " className="w-[50%]  pb-60 z-[1]" />
      </div> */}
      <img
        src="./Images/Si3.png"
        alt=" "
        className="absolute top-[35%] w-full  h-[577px]  "
      />
     
    </div>
  );
}
