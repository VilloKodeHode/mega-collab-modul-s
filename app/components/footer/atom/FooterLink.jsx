// ENSURE INTER IS IN GLOBAL CSS AND TAILWIND CONFIG

import Link from "next/link";
import React from "react";

export const FooterLink = ({ className, title, href }) => {
  return (
    <Link href={href} className={`text-white text-5xl font-inter ${className}`}>
      {title}
    </Link>
  );
};
