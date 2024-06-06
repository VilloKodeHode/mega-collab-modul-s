import Image from "next/image";
import { FooterLinks } from "../atom/FooterLinks";

export const Footer = () => {
  const linkItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex bg-green-800 gap-36 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="mx-24 gap mr-64">
        <Image
          src="/components/images/erik/FallingStars.webp"
          className="h-12 w-16 mt-6 ml-16"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <FooterLinks items={linkItems} />
    </div>
  );
};
