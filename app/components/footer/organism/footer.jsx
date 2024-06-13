import React from "react";
import Image from "next/image";
import { FooterLinks } from "../molecule/FooterLinks"; // Named import

export const Footer = () => {
  const linkItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col bg-green-800 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-[252px] h-[323px]">
          <Image
            src="/components/images/footer/Footer_Divider_Left.png"
            alt="Divider Left"
            width={252}
            height={323}
          />
        </div>
        <div className="w-[328px] h-[162px]">
          <h1>Made in association with:</h1>
          <Image
            src="/components/images/footer/Jobloop_Logo.png"
            alt="Jobloop Logo"
            width={328}
            height={162}
          />
        </div>
        <div className="w-[252px] h-[323px]">
          <Image
            src="/components/images/footer/Footer_Divider_Right.png"
            alt="Divider Right"
            width={252}
            height={323}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <FooterLinks items={linkItems} />
      </div>
    </div>
  );
};

export default Footer;
