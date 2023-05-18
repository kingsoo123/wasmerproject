import React from "react";
import Image from "next/image";
import { Logo, twitter, linkedin, facebook, youtube } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full mt-[50px]">
      <div className="w-full md:h-[300px] flex flex-col-reverse sm:flex-row justify-between">
        <div className="md:w-[40%] w-[100%] h-full p-5 space-y-5">
          <Image src={Logo} alt="Picture of the logo" />
          <p className="leading-snug break-normal font-gilroy mt-4 text-black tracking-widest text-opacity-50">
            Making software <br /> universally accessible
          </p>
          <div className="w-[127px] h-[20px] flex justify-around opacity-25">
            <Image src={twitter} alt="Picture of the logo" />
            <Image src={linkedin} alt="Picture of the logo" />
            <Image src={facebook} alt="Picture of the logo" />
            <Image src={youtube} alt="Picture of the logo" />
          </div>
        </div>
        <div className="md:w-[60%] w-[100%] h-full md:flex flex-row justify-around p-5">
          <div className="space-y-4">
            <p className="text-[#0F0518] text-[16px] leading-snug break-normal font-gilroy mt-4 text-black tracking-widest">
              Explore
            </p>
            {["Packages", "Blog"].map((item, id) => (
              <p
                key={id}
                className="text-[#0F0518] text-[16px] leading-snug break-normal font-gilroy mt-4 text-black tracking-widest text-opacity-50"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-[#0F0518] text-[16px] leading-snug break-normal font-gilroy mt-4 text-black tracking-widest">
              Products
            </p>
            {["Run", "Publish", "Deploy"].map((item, id) => (
              <p
                key={id}
                className="text-[#0F0518] text-[16px] leading-snug break-normal font-gilroy mt-4 text-black tracking-widest text-opacity-50"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-[#0F0518] text-[16px] leading-snug break-normal font-gilroy mt-4 text-black tracking-widest">
              Developers
            </p>
            {["Documentation", "Runtime", "Registry", "Deploy"].map(
              (item, id) => (
                <p
                  key={id}
                  className="text-[#0F0518] text-[16px] leading-snug break-normal font-gilroy mt-4 text-black tracking-widest text-opacity-50"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#cdd5e9] opacity-50" />
      <div className="w-full flex p-5 space-x-5">
        {["Imprint", "Privacy", "Terms"].map((item, id) => (
          <p
            className="leading-snug break-normal font-gilroy mt-4 text-black tracking-widest text-opacity-50"
            key={id}
          >
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
