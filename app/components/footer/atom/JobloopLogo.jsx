// ENSURE THAT INTER FONT IS IN GLOBAL STYLES AND THAT TAILWIND RECOGNISES IT.

import React from "react";
import Image from "next/image";

const JobloopLogo = () => {
  return (
    <div className="flex flex-col items-center m-0 p-0">
      <div className="imageHeader">
        <h1 className="text-white text-4xl font-inter mb-8 text-center pl-2">
          Made in association with:
        </h1>
      </div>
      <div className="w-[328px] h-[162px]">
        <Image
          src="/components/images/footer/Jobloop_Logo.png"
          alt="Jobloop Logo"
          width={328}
          height={162}
        />
      </div>
    </div>
  );
};

export default JobloopLogo;
