import React from "react";
import Image from "next/image";
import { purplecircle, glocircle, greencircle, book, Arrow } from "../assets";

export const ProductsDropdown = () => {
  return (
    <div className="p-5 space-y-5">
      <div className="flex space-x-4">
        <Image src={greencircle} alt="greencircle" />
        <span>
          <p>Run</p>
          <p>Run any code anywhere</p>
        </span>
      </div>
      <div className="flex space-x-4">
        <Image src={glocircle} alt="greencircle" />
        <span>
          <p>Publish</p>
          <p>Create, publish, collaborate</p>
        </span>
      </div>
      <div className="flex space-x-4">
        <Image src={purplecircle} alt="greencircle" />
        <span>
          <p>Deploy</p>
          <p>Deploy above the clouds</p>
        </span>
      </div>
    </div>
  );
};

export const DevelopersDropdown = () => {
  return (
    <div className="w-full">
      <div className="p-5 space-y-5">
        <p>CLI</p>
        <div className="w-[100%] h-[1px] bg-[#cdd5e9] opacity-50" />
        <div className="flex items-center space-x-2">
          <Image src={book} alt="greencircle" />
          <p>Documentation</p>
          <Image src={Arrow} alt="greencircle" />
        </div>
        <div className="flex gap-9">
          <span className="space-y-2">
            <p>Get started</p>
            <p>Runtime</p>
            <p>Registry</p>
            <p>Deploy</p>
          </span>
          <span className="space-y-2">
            <p>Run a package</p>
            <p>Publish a package</p>
            <p>Run a package</p>
            <p>Deploy your website</p>
          </span>
        </div>

        <div className="w-[100%] h-[1px] bg-[#cdd5e9] opacity-50" />
        <p>Tools</p>
        <p>Visual Studio Code Extension</p>
      </div>
      <div className="w-full h-[100px] bg-[#0E061A] rounded-lg p-5">
        <p className="sm:text-[16px] font-semibold leading-snug break-normal font-gilroy mt-4 text-white tracking-widest  text-opacity-50">
          SDK’S
        </p>
        <span className="flex space-x-2">
          {["Python", "Rust", "Go", "C", "Docker"].map((item, id) => (
            <p
              className="sm:text-[16px] font-semibold leading-snug break-normal font-gilroy text-white tracking-widest"
              key={id}
            >
              {item}
            </p>
          ))}
        </span>
      </div>
    </div>
  );
};
