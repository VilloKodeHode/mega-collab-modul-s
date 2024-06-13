import React from "react";
import { FooterLinks } from "../molecule/FooterLinks";
import DividerLeft from "../atom/DividerLeft";
import JobloopLogo from "../atom/JobloopLogo";
import DividerRight from "../atom/DividerRight";

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
        <FooterLinks items={linkItems} />
        <DividerRight />
      </div>
    </div>
  );
};

export default Footer;
