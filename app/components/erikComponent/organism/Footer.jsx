import Image from "next/image";
import { FooterLinks } from "../../footer/molecule/FooterLinks";

export const Footer = () => {
  const linkItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex bg-green-800 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="w-full h-16">
        <h1 className="text-3xl font-bold">Footer!</h1>
      </div>
      <div className="flex-grow">
        <FooterLinks items={linkItems} />
      </div>
    </div>
  );
};
