import Image from "next/image";
import { FooterLinks } from "../atom/FooterLinks";

export const Footer = () => {
  const linkItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex bg-green-800 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="w-full h-16">
        <Image
          src="/components/images/erik/FallingStars.webp"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-grow">
        <FooterLinks items={linkItems} />
      </div>
    </div>
  );
};
