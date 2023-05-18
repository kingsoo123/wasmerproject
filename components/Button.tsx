import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  width?: number;
  fontsize: number;
  imgsrc?: string;
  imgsrctwo?: string;
}
const Button = ({ title, width, fontsize, imgsrc, imgsrctwo }: Props) => {
  return (
    <button
      className={`flex justify-around items-center bg-[#0F0518] px-5 py-2 rounded-[72px] w-fit max-w-[${width}px] text-[#FBFBFC] text-[${fontsize}px] tracking-widest font-zeitung m-auto`}
    >
      {imgsrctwo && (
        <Image
          src={imgsrctwo}
          alt={imgsrctwo}
          className="w-25 h-8 object-contain"
        />
      )}
      {title}
      {imgsrc && <Image src={imgsrc} alt={imgsrc} className="w-2 h-2" />}
    </button>
  );
};

export default Button;
