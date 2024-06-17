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
      <div className="container mx-auto flex items-center justify-between p-0">
        <DividerLeft className="m-0 p-0" />
        <JobloopLogo className="m-0 p-0" />
        <FooterLinks items={linkItems} className="m-0 p-0" />
        <DividerRight className="m-0 p-0" />
      </div>
    </div>
  );
};

export default Footer;

// Maybe put in "flex space-x-4" in FooterLinks
