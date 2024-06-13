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
    <div className="bg-[#0D1626] text-white h-[323px]">
      <div className="container mx-auto flex items-center justify-between p-12">
        <DividerLeft />
        <JobloopLogo />
        <FooterLinks items={linkItems} className="flex space-x-4" />
        <DividerRight />
      </div>
    </div>
  );
};

export default Footer;
