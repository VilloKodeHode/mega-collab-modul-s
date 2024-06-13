import React from "react";
import { FooterLinks } from "../molecule/FooterLinks";
import DividerLeft from "./atoms/DividerLeft";
import JobloopLogo from "./atoms/JobloopLogo";
import DividerRight from "./atoms/DividerRight";

export const Footer = () => {
  const linkItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col bg-green-800 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="container mx-auto flex justify-center items-center">
        <DividerLeft />
        <JobloopLogo />
        <DividerRight />
      </div>
      <div className="flex justify-center">
        <FooterLinks items={linkItems} />
      </div>
    </div>
  );
};

export default Footer;
