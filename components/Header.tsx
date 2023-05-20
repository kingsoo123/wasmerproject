"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Logo, Search, burger, close, bell } from "../assets";
import Button from "./Button";
import {
  DevelopersDropdown,
  ProductsDropdown,
} from "../components/ProductsDropdown";
import Sidemenu from "./Sidemenu";
import { WasmerContext } from "../context/WasmerContext";

const Header = () => {
  const { signIn, setSignIn } = useContext(WasmerContext);
  const [showdropdown, setShowdropdown] = useState<boolean>(false);
  const [position, setpPosition] = useState<string>("left-[-50px]");
  const [comp, setComp] = useState<any>("");
  const [showMenu, setShowmenu] = useState<boolean>(false);

  console.log(signIn, "::::::::::::");
  useEffect(() => {
    position === "left-[-50px]"
      ? setComp(<ProductsDropdown />)
      : setComp(<DevelopersDropdown />);
  }, [position]);
  return (
    <div className="fixed z-20 w-full flex justify-between bgColor">
      <div className="w-1/2 p-4 pl-8 flex space-x-4 items-center">
        <Image src={Logo} alt="Picture of the logo" />
        <div className="hidden w-[378px] h-[36px] rounded bg-[#DDDEE5] md:flex flex-row items-center pl-2 space-x-2">
          <Image
            src={Search}
            alt="Picture of the logo"
            className="opacity-25"
          />
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
            onMouseEnter={() => (
              setShowdropdown(true), setpPosition("left-[-50px]")
            )}
          >
            Products
          </li>
          <li
            className="hover:underline underline-offset-4"
            onMouseEnter={() => (
              setShowdropdown(true), setpPosition("left-[90px]")
            )}
          >
            Developers
          </li>
          <li>Packages</li>
          <li>Blog</li>
        </ul>
        {signIn ? (
          <Image src={bell} alt="bell" />
        ) : (
          <span onClick={() => setSignIn(true)}>
            <Button
              title=" Sign up"
              width={0}
              fontsize={16}
              imgsrc={""}
              imgsrctwo={""}
            />
          </span>
        )}

        <div
          className={`${
            !showdropdown && "hidden"
          }   w-[400px] border rounded-lg absolute top-14 ${position} z-30 border border-[1px] bg-white transition-all duration-200 transform`}
          onMouseEnter={() => setShowdropdown(true)}
          onMouseLeave={() => setShowdropdown(false)}
        >
          {comp}
        </div>
      </div>
      <div className="sm:hidden flex items-center justify-center space-x-5 pr-2">
        {signIn ? (
          <Image src={bell} alt="bell" />
        ) : (
          <span onClick={() => setSignIn(true)}>
            <Button
              title=" Sign up"
              width={0}
              fontsize={16}
              imgsrc={""}
              imgsrctwo={""}
            />
          </span>
        )}
        <span onClick={() => setShowmenu(!showMenu)} className="p-3">
          {showMenu ? (
            <Image src={close} alt="close" />
          ) : (
            <Image src={burger} alt="burger" />
          )}
        </span>
      </div>
      {showMenu && <Sidemenu />}
    </div>
  );
};

export default Header;
