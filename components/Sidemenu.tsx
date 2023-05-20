import React, { useState, useContext } from "react";
import Image from "next/image";
import {
  Search,
  cli,
  clones,
  spiral,
  plug,
  meta,
  apple,
  google,
  person,
} from "../assets";
import Button from "./Button";
import { WasmerContext } from "../context/WasmerContext";
import { ProductSidemenu, DeveloperSidemenu } from "../components/Dropdowns";

const darkCards = [
  {
    icon: spiral,
    title: "Fast",
    content:
      "Run apps at close to native speed and outperform the competition.",
  },
  {
    icon: clones,
    title: "Safe",
    content: "Everything is containerized so nothing is exposed.",
  },
  {
    icon: plug,
    title: "Pluggable",
    content: "Plug your own backend, compiler, or runner",
  },
];

const Sidemenu = () => {
  const { signIn, setSignIn } = useContext(WasmerContext);
  const [sideMenuLinks, setSideMenuLinks] = useState("default");

  const setOtherMenus = () => {
    if (sideMenuLinks === "Products") {
      return <ProductSidemenu setSideMenuLinks={setSideMenuLinks} />;
    } else if (sideMenuLinks === "Developers") {
      return <DeveloperSidemenu setSideMenuLinks={setSideMenuLinks} />;
    }
  };

  return (
    <div
      className={`fixed w-full ${
        sideMenuLinks === "default" ? "h-[100%]" : "h-[60%]"
      } right-0 top-[65px] ${
        sideMenuLinks === "default" ? "overflow-scroll" : ""
      } p-2`}
    >
      <div className="flex-col pb-[300px]">
        {sideMenuLinks === "default" ? (
          <>
            <div className="flex-col w-[100%] p-3 bg-white  border border-[1px]  rounded-lg pb-[40px] relative">
              <div className="m-auto w-[95%] h-[36px] rounded bg-[#EFEEF0] flex justify-start items-center pl-2 space-x-2">
                <Image
                  src={Search}
                  alt="Picture of the logo"
                  className="opacity-25"
                />
                <input
                  type="text"
                  placeholder="Search packages, users or apps"
                  className="bg-transparent text-[#0F0518] font-gilroy"
                />
              </div>
              <span className="space-y-4">
                {["Products", "Developers", "Packages", "Blog", "SDK’S"].map(
                  (item, id) => (
                    <p
                      key={id}
                      className="mt-8 cursor-pointer"
                      onClick={() =>
                        item === "Products"
                          ? setSideMenuLinks("Products")
                          : item === "Developers" &&
                            setSideMenuLinks("Developers")
                      }
                    >
                      {item}
                    </p>
                  )
                )}
              </span>
              <div className="w-full h-[1px] bg-[#0F0518] opacity-25 mt-2" />
              <span className="flex justify-start items-center space-x-2 mt-4">
                <Image src={cli} alt="Picture of the logo" />
                <p>CLI</p>
              </span>
              <div className="w-full h-[1px] bg-[#0F0518] opacity-25 mt-4" />
              <span>
                <p className="text-black text-opacity-25 mt-4">Tools</p>
                <p>Visual Studio Code Extension</p>
              </span>
              <div className="w-full h-[1px] bg-[#0F0518] opacity-25 mt-2" />
              <span className="flex justify-between items-center space-x-2 mt-4">
                {signIn && (
                  <>
                    <span className="flex justify-start items-center space-x-2">
                      <Image
                        src={person}
                        alt="Picture of the logo"
                        className="rounded-full"
                      />
                      <p>Julian</p>
                    </span>
                    <span onClick={() => setSignIn(false)}>
                      <Button
                        title=" Sign out"
                        width={0}
                        fontsize={16}
                        imgsrc={""}
                        imgsrctwo={""}
                      />
                    </span>
                  </>
                )}
              </span>
            </div>
            <div>
              {darkCards?.map((item, id) => {
                return (
                  <div key={id}>
                    <div className="h-[5px]" />
                    <div
                      className={`mt-5 w-[100%] h-[238px] bg-[#0E061A]  flex-col items-center pt-8 p-5 rounded-lg ${
                        id === 0 && "-mt-[50px]"
                      } -z-10 green`}
                    >
                      <Image
                        src={item.icon}
                        alt="Picture of the logo"
                        className="m-auto"
                      />
                      <p className="text-[24px] text-[#FAFBFD] leading-snug break-normal font-gilroy tracking-widest text-center">
                        {item.title}
                      </p>
                      <p className="text-[16px] text-[#FAFBFD] leading-snug break-normal font-gilroy tracking-widest text-center text-opacity-50">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full flex-col mt-[80px]">
              <p className="m-auto text-[#191A1F] text-[20px] leading-snug break-normal font-gilroy text-center w-[219px]">
                Wasmer is used by devs working at:{" "}
              </p>
            </div>
            <div className="flex justify-around items-center mt-5">
              <Image src={meta} alt="Picture of the logo" className="m-auto" />
              <Image src={apple} alt="Picture of the logo" className="m-auto" />
              <Image
                src={google}
                alt="Picture of the logo"
                className="m-auto"
              />
            </div>
          </>
        ) : (
          setOtherMenus()
        )}
      </div>
    </div>
  );
};

export default Sidemenu;
