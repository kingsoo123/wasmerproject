"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Logo, Search, burger } from "../assets";
import Button from "./Button";
import {
  DevelopersDropdown,
  ProductsDropdown,
} from "../components/ProductsDropdown";

const Header = () => {
  const [showdropdown, setShowdropdown] = useState<boolean>(false);
  const [position, setpPosition] = useState<number>(0);
  return (
    <div className="fixed z-20 w-full flex justify-between bgColor">
      <div className="w-1/2 p-4 pl-8 flex space-x-4 items-center">
        <Image src={Logo} alt="Picture of the logo" />
        <div className="hidden w-[378px] h-[36px] rounded bg-[#DDDEE5] md:flex flex-row items-center pl-2 space-x-2">
          <Image src={Search} alt="Picture of the logo" />
          <input
            type="text"
            placeholder="Search for packages"
            className="bg-transparent text-[#0F0518] font-gilroy"
          />
        </div>
      </div>
      <div className="hidden w-1/2 h-full p-3 md:flex flex-row items-center justify-around space-x-2 relative">
        <ul className="w-3/4 flex justify-around items-center font-gilroy cursor-pointer">
          <li
            className="hover:underline underline-offset-4"
            onMouseEnter={() => (setShowdropdown(true), setpPosition(28))}
          >
            Products
          </li>
          <li
            className="hover:underline underline-offset-4"
            onMouseEnter={() => (setShowdropdown(true), setpPosition(40))}
          >
            Developers
          </li>
          <li>Packages</li>
          <li>Blog</li>
        </ul>
        <Button
          title=" Sign up"
          width={0}
          fontsize={16}
          imgsrc={""}
          imgsrctwo={""}
        />
        <div
          className={`${
            !showdropdown && "hidden"
          }   w-[400px] border rounded-lg absolute top-14 -left-${position} z-30 border border-[1px] bg-white`}
          onMouseEnter={() => setShowdropdown(true)}
          onMouseLeave={() => setShowdropdown(false)}
        >
          {position === 28 ? <ProductsDropdown /> : <DevelopersDropdown />}
        </div>
      </div>
      <div className="sm:hidden flex items-center justify-center space-x-5 pr-2">
        <Button
          title=" Sign up"
          width={0}
          fontsize={16}
          imgsrc={""}
          imgsrctwo={""}
        />
        <Image src={burger} alt="burger" />
      </div>
    </div>
  );
};

export default Header;
