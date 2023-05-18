import React from "react";
import Image from "next/image";
import { wordpress, django } from "../assets";

const Cardtwo = () => {
  return (
    <div className="md:flex flex-row w-full justify-between items-center space-y-4 mt-4">
      <div className="sm:w-[48%] w-[100%] h-[90%] bg-white rounded-lg border-[1px]">
        <div className="w-full flex justify-end">
          <div className="w-[90%]">
            <p className="sm:text-[32px] leading-snug break-normal font-gilroy mt-4">
              Welcome to the world&apos;s most popular website builder
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis exercitationem voluptates
            </p>
            <button className="p-2 bg-[#3373BE] text-white">Get started</button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-2" />
        <div className="w-full flex justify-center items-center mt-4 space-x-2">
          <Image src={wordpress} alt="wordpress" />
          <p className="sm:text-[24px] font-semibold leading-snug break-normal font-gilroy">
            wordpress
          </p>
        </div>
      </div>
      <div className="sm:w-[48%] w-[100%] h-[100%]">
        <div className="w-[100%] flex-col  bg-black p-1 rounded-lg">
          <p className="sm:text-2xl text-center leading-snug break-normal font-gilroy mt-5 text-white text-opacity-50">
            Welcome to the world&apos;s most popular website builder
          </p>
          <span className="flex justify-center mt-4">
            <button className="p-2 bg-[#3373BE] text-white">Get started</button>
          </span>

          <div className="w-full h-[1px] bg-white mt-[60px]" />
        </div>
        <div className="w-full flex justify-center items-center mt-0 space-x-2 bg-white p-3">
          <Image src={django} alt="wordpress" />
          <p className="sm:text-[24px] font-semibold leading-snug break-normal font-gilroy">
            django
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cardtwo;
