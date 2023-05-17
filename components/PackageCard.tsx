import React from "react";
import Image from "next/image";
import { packagelogo, slantline, likes } from "../assets";
const PackageCard = () => {
  return (
    <div className="w-[500px] max-w-[500px] bg-[#FDFDFE] rounded-lg cardshadow mt-[30px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[90%] flex justify-start items-center gap-5 p-4">
          <Image src={packagelogo} alt="packagelogo" />
          <span className="flex">
            <p className="text-[22px] font-semibold leading-snug break-normal font-gilroy">
              sqlite
            </p>
            <Image src={slantline} alt="packagelogo" />
            <p className="text-[22px] font-semibold leading-snug break-normal font-gilroy">
              sqlite
            </p>
          </span>
        </div>
      </div>
      <div className="w-[90%] flex justify-start items-center gap-5 p-4">
        <p className="text-[#0E061A] text-[18px]  font-gilroy text-opacity-50">
          SQLite is a C-language library that implements a small, fast,
          self-contained, high-reliability, full-featured, SQL database engine
        </p>
      </div>
      <div className="w-[40%] h-[30px] flex justify-end items-center gap-5">
        <Image src={likes} alt="packagelogo" />
        <p className="text-[#0E061A] text-[16px]  font-gilroy text-opacity-50">
          2.8k
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
