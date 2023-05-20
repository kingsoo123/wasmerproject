"use client";

import React from "react";
import Button from "./Button";
import { Carousel } from "@trendyol-js/react-carousel";
import {
  Greenbar,
  WhiteArrow,
  Brownbar,
  Roundbar,
  bgimg,
  leftside,
  rightside,
  docker,
  workflow,
  cobols,
  jsss,
  python,
  golang,
  Arrow,
  vercel,
  plane,
  instant,
} from "../assets";
import Image from "next/image";
import PackageCard from "../components/PackageCard";
import Cardtwo from "../components/Cardtwo";

const About = () => {
  return (
    <div className="w-full flex-col justify-center items-center mt-[90px]">
      {/* create the apps */}
      <div className="w-full flex">
        <div className="w-[70%] space-y-5 m-auto">
          {/* first span */}
          <span className="w-full md:flex flex-row sm:space-x-4 justify-center items-center">
            <p className="sm:text-[48px] text-[38px] font-semibold leading-snug break-normal font-gilroy tracking-wider text-center">
              Create apps that
            </p>
            <Button
              title="Run"
              width={173}
              fontsize={24}
              imgsrc={WhiteArrow}
              imgsrctwo={Greenbar}
            />
            <p className="sm:text-[48px] text-[38px] font-semibold leading-snug break-normal font-gilroy tracking-wider text-center">
              everywhere.
            </p>
          </span>
          {/* second span */}
          <span className="md:flex flex-row sm:space-x-4 justify-center items-center">
            <Button
              title="Publish"
              width={240}
              fontsize={24}
              imgsrc={WhiteArrow}
              imgsrctwo={Brownbar}
            />
            <p className="sm:text-[48px] text-[38px] font-semibold leading-snug break-normal font-gilroy tracking-wider text-center">
              and share with the community
            </p>
          </span>
          {/* third span */}
          <span className="md:flex flex-row sm:space-x-4 justify-center items-center m-auto">
            <p className="sm:text-[48px] text-[38px] font-semibold leading-snug break-normal font-gilroy tracking-wider text-center">
              and
            </p>
            <Button
              title="Deploy"
              width={240}
              fontsize={24}
              imgsrc={WhiteArrow}
              imgsrctwo={Roundbar}
            />
            <p className="sm:text-[48px] text-[38px] font-semibold leading-snug break-normal font-gilroy tracking-wider text-center">
              to the edge, globally.
            </p>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-[40px]">
        <div className="w-[2px] divider  h-[144px]" />
      </div>
      {/* run the world */}
      <div className="w-full flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <Button
            title="Run"
            width={140}
            fontsize={24}
            imgsrc={""}
            imgsrctwo={Greenbar}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="sm:text-[48px] text-[34px] font-semibold leading-snug break-normal font-gilroy mt-4">
            Run the world
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="sm:w-[60%] w-[90%]">
            <p className="text-[#0E061A] sm:text-[22px] text-[16px] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50">
              Using a binary for each platform and chip is the past. Rise above
              with lightweight containerized apps that simply run everywhere.
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="sm:w-[70%] w-full relative">
            <div className="w-full h-full flex justify-between items-center">
              <Image
                src={leftside}
                alt="leftside"
                className="sm:w-[280px] w-[100px] h-[230px] rotateCircle opacity-25"
              />
              <div className="w-full flex-col">
                <span className="flex justify-center items-center  mt-[40px]">
                  <div className="sm:w-[35%] w-[30%] flex justify-center items-center space-x-2">
                    <Image src={docker} alt="leftside" />
                    <Image src={workflow} alt="leftside" />
                    <Image src={cobols} alt="leftside" />
                    <Image src={jsss} alt="leftside" />
                    <Image src={python} alt="leftside" />
                    <Image src={golang} alt="leftside" />
                  </div>
                </span>
                <span className="flex justify-center items-center m-auto p-2">
                  <p className="sm:text-2xl text-[14px] text-white">
                    Supports almost every programming language
                  </p>
                </span>
              </div>

              <Image
                src={rightside}
                alt="leftside"
                className="sm:w-[280px] w-[100px] h-[230px] circleFilt opacity-25"
              />
            </div>
            <span className="sm:w-[90%] sm:h-[118px] bg-[#0F0518] rounded-lg flex  justify-between items-center sm:-mt-[40px] p-5 green sm:m-auto">
              <p className="text-[22px] text-white">
                Truly universal, runs everywhere {"&"} fast as native
              </p>
              <div className="sm:w-[70px] w-full flex justify-end">
                <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center">
                  <Image src={Arrow} alt="leftside" />
                </div>
              </div>
            </span>
            <div className="absolute top-0 right-0 bottom-0 left-0 sectbg -z-10"></div>
          </div>
        </div>
        {/* this programming */}
        <div className="w-full flex-col justify-center items-center mt-[60px]">
          <div className="w-full flex justify-center items-center">
            <div className="sm:w-[30%] w-[70%] m-auto">
              <p className="text-[#0E061A] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50">
                “This programming tool makes it easier for apps to work
                anywhere”
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-4 opacity-25 m-auto">
            <Image src={vercel} alt="leftside" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[40px]">
          <div className="w-[2px] divider h-[144px]" />
        </div>
      </div>
      {/* publish our work */}
      <div className="w-full flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <Button
            title="Publish"
            width={140}
            fontsize={24}
            imgsrc={""}
            imgsrctwo={Brownbar}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="sm:text-[48px] text-[34px] font-semibold leading-snug break-normal font-gilroy mt-4">
            Better together
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="sm:w-[60%] w-[90%]">
            <p className="text-[#0E061A] sm:text-[22px] text-[16px] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50">
              Using a binary for each platform and chip is the past. Rise above
              with lightweight containerized apps that simply run everywhere.
            </p>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center mt-[100px]">
          <div className="sm:w-[90%] w-full relative">
            <div className="w-full md:flex flex-row justify-center items-center sm:space-x-4 sm:pl-0 pl-4">
              {/* insert cards */}
              {[1, 2, 3].map((item, id) => (
                <PackageCard key={id} />
              ))}
            </div>
            <div className="w-full flex justify-center items-center mt-8 sm:pl-o pl-4">
              <span className="sm:w-[50%] w-full sm:h-[118px] bg-[#0F0518] rounded-lg md:flex flex-row justify-between items-center p-5 orange">
                <p className="text-[22px] text-white">
                  All languages, fully containerize {"&"} collaborative
                </p>
                <div className="sm:w-[70px] w-full flex justify-end">
                  <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center">
                    <Image src={Arrow} alt="leftside" />
                  </div>
                </div>
              </span>
              <div className="absolute sm:top-[40%] top-40 sm:right-[25%] right-0 bottom-0 sm:left-[25%] left-0 secbgtwo -z-10"></div>
            </div>
          </div>
        </div>
        {/* this programming */}
        <div className="w-full flex-col justify-center items-center mt-[90px]">
          <div className="w-full flex justify-center items-center">
            <div className="sm:w-[30%] w-[70%] m-auto">
              <p className="text-[#0E061A] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50 text-center">
                “This programming tool makes it easier for apps to work
                anywhere”
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-4 opacity-25 m-auto">
            <Image src={vercel} alt="leftside" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[40px]">
          <div className="w-[2px] divider h-[144px]" />
        </div>
      </div>
      {/* deploy our work */}
      <div className="w-full flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <Button
            title="Deploy"
            width={140}
            fontsize={24}
            imgsrc={""}
            imgsrctwo={Roundbar}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="sm:text-[48px] text-[34px] font-semibold leading-snug break-normal font-gilroy mt-4">
            Above the clouds
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="sm:w-[60%] w-[90%]">
            <p className="text-[#0E061A] sm:text-[22px] text-[16px] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50">
              Get the scalability of serverless and the reusability of cloud.
              Deploy to the edge, save your users time and yourself money.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[100px]">
          <div className="sm:w-[70%] w-full relative">
            <div className="w-full flex justify-center items-center">
              {/* insert cards */}
              <Cardtwo />
            </div>
            <div className="flex w-[full] justify-center items-center mt-4">
              <div className="sm:flex flex-row sm:w-[80%] w-[100%] justify-center items-center space-x-5">
                <span className="flex justify-center items-center space-x-2">
                  <Image src={plane} alt="plane" />
                  <p className="text-white sm:text-1xl text-[16px] text-center leading-snug break-normal font-gilroy tracking-widest">
                    No servers to maintain
                  </p>
                </span>

                <span className="flex justify-center items-center space-x-2">
                  <Image src={instant} alt="plane" />
                  <p className="text-white sm:text-1xl text-[16px] text-center leading-snug break-normal font-gilroy tracking-widest">
                    No servers to maintain
                  </p>
                </span>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-8 purple">
              <span className="w-[100%] sm:h-[118px] bg-[#0F0518] rounded-lg md:flex flex-row justify-between items-center p-5">
                <p className="text-2xl text-white">
                  Faster, cheaper {"&"} indefinitely scalable
                </p>
                <div className="sm:w-[70px] w-full flex justify-end">
                  <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center ">
                    <Image src={Arrow} alt="leftside" />
                  </div>
                </div>
              </span>
            </div>
            <div className="absolute sm:top-[20%] top-0 sm:right-[20%] right-0 bottom-0 sm:left-[20%] left-0 sectbgthree -z-10"></div>
          </div>
        </div>
        {/* this programming */}
        <div className="w-full flex-col justify-center items-center mt-[60px]">
          <div className="w-full flex justify-center items-center">
            <div className="sm:w-[30%] w-[70%] m-auto">
              <p className="text-[#0E061A] text-center leading-snug break-normal font-gilroy tracking-widest text-opacity-50">
                “This programming tool makes it easier for apps to work
                anywhere”
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 opacity-25 m-auto">
            <Image src={vercel} alt="leftside" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-[120px]">
          <div className="w-[90%] bg-[#0F0518] rounded-lg p-5 boxes">
            <p className="sm:text-[48px] font-semibold leading-snug break-normal font-gilroy mt-4 text-white">
              Get Started
            </p>
            <p className="sm:text-[22px] font-semibold leading-snug break-normal font-gilroy mt-4 text-white tracking-widest  text-opacity-50">
              Join the vibrant Wasmer community. Create your fist package, run
              it from the shell and deploy it to the Edge
            </p>
            <div className="w-full flex justify-end">
              <div className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center mt-5">
                <Image src={Arrow} alt="leftside" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
