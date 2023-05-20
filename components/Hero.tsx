import React from "react";
import Image from "next/image";
import {
  SemicircleOne,
  SemicircleTwo,
  Grad,
  Codebox,
  Innersix,
  Innerfive,
  Innerfour,
  Innerthree,
  Innertwo,
  Innerone,
  Star,
  Git,
  Arrow,
} from "../assets";

const Hero = () => {
  return (
    <div className="md:w-[100%] pt-[200px] flex-col justify-center items-center w-[100%]">
      <div className="md:w-full w-[100%] flex justify-center items-center">
        <div className="md:w-[40%]  w-[90%]">
          <h1 className="sm:text-[52px] text-[44px] font-semibold leading-snug break-normal font-gilroy text-center">
            Run, Publish {`&`} Deploy any code – anywhere
          </h1>
        </div>
      </div>
      <div className="sm:w-full mt-6 relative h-[400px] pb-4">
        <div className="hidden w-full md:flex flex-row justify-between absolute">
          <Image
            src={SemicircleOne}
            alt="SemicircleOne"
            className="circleFilt"
          />
          <Image
            src={SemicircleTwo}
            alt="SemicircleOne"
            className="right-0 opacity-5"
          />
        </div>
        <div className="hidden w-full h-[400px] absolute top-[50px] md:flex flex-row justify-between items-center">
          <div className="w-[50%] h-full -space-y-10">
            <Image src={Innersix} alt="Innersix" />
            <Image src={Innerfive} alt="Innersix" />
            <Image src={Innerfour} alt="Innersix" />
          </div>
          <div className="w-[50%] h-full space-y-0 -mt-8 ml-[120px]">
            <Image src={Innerone} alt="Innersix" className="w-full h-[120px]" />
            <Image
              src={Innertwo}
              alt="Innersix"
              className="w-full ml-auto h-[120px]"
            />
            <Image
              src={Innerthree}
              alt="Innersix"
              className="w-full ml-auto h-[120px]"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center absolute">
          <Image src={Grad} alt="Grad" className="absolute -z-20" />
          <Image src={Codebox} alt="Codebox" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="sm:w-[40%] w-[90%]">
          <p className="text-[#0E061A] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50">
            Serve sandboxed WebAssembly apps anywhere through a single runtime
            and do in days what others do in months.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[30px]">
        <div className="w-[40%]">
          <p className="text-[#0E061A] text-center leading-snug break-normal font-gilroy tracking-widest">
            Reach for the stars, we do too.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[30px]">
        <div className="w-[220px] flex justify-around items-center bg-[#FCFCFE] h-[54px] rounded-[56px] border border-[1.5px] pl-2">
          <span className="flex justify-around items-center h-full w-[50%]">
            <p className="text-[#0E061A] text-center leading-snug break-normal font-gilroy tracking-widest font-semibold">
              15,000
            </p>
            <Image src={Star} alt="star" />
          </span>
          <div className="w-[2px] h-[32px] bg-[#D7D6DB]" />
          <span className="flex justify-around items-center h-full w-[30%]">
            <Image src={Git} alt="star" />
            <Image src={Arrow} alt="Arrow" className="-mt-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
