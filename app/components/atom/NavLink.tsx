import Link from "next/link";
import React from "react";

interface LinksProps {
  href: string;
  children: React.ReactNode;
}

const NavLinks: React.FC<LinksProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      {/* <link rel="stylesheet" href="/app/page.tsx" /> */}
      {children}
    </Link>
  );
};

export default NavLinks;
