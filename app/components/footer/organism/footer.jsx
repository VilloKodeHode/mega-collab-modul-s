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
    <div className="flex bg-green-800 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-[328px] h-[162px]">
          <Image
            src="/components/images/footer/logo.png"
            alt="Company Logo"
            width={328}
            height={162}
          />
        </div>
      </div>
      <div className="flex-grow">
        <FooterLinks items={linkItems} />
      </div>
    </div>
  );
};

export default Footer;
