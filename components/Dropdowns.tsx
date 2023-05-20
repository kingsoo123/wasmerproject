import React, { useContext } from "react";
import Image from "next/image";
import {
  purplecircle,
  glocircle,
  greencircle,
  backarrow,
  person,
} from "../assets";
import Button from "./Button";
import { WasmerContext } from "../context/WasmerContext";

interface Props {
  setSideMenuLinks?: any;
}

export const ProductSidemenu = ({ setSideMenuLinks }: Props) => {
  const { signIn, setSignIn } = useContext(WasmerContext);

  return (
    <div className="w-full">
      <div className="w-[100%] h-full p-5 space-y-5 bg-white rounded-lg border border-[1px]">
        <span
          className="flex space-x-2 justify-start items-center cursor-pointer"
          onClick={() => setSideMenuLinks("default")}
        >
          <Image src={backarrow} alt="backarrow" />
          <p>Products</p>
        </span>

        <div className="w-full h-[1px] bg-[#0E061A] opacity-25 mt-2" />
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
        <div className="w-full h-[1px] bg-[#0E061A] opacity-25 mt-2" />
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
    </div>
  );
};

export const DeveloperSidemenu = ({ setSideMenuLinks }: Props) => {
  const { signIn, setSignIn } = useContext(WasmerContext);

  return (
    <div>
      <div className="h-full p-5 space-y-5 bg-[#FBFBFC] rounded-lg border border-[1px]">
        <span
          className="flex space-x-2 justify-start items-center cursor-pointer"
          onClick={() => setSideMenuLinks("default")}
        >
          <Image src={backarrow} alt="backarrow" />
          <p>Developers</p>
        </span>

        <div className="w-[100%] h-[1px] bg-[#0F0518] opacity-25 mt-2" />

        {[
          "Get started",
          "Runtime",
          "Registry",
          "Edge",
          "Get started",
          "Run a package",
          "Publish a package",
          "Deploy your website",
        ].map((item, id) => (
          <p key={id}>{item}</p>
        ))}
        <div className="w-[100%] h-[1px] bg-[#0F0518] opacity-25 mt-2" />
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
    </div>
  );
};
