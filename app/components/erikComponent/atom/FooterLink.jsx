import Link from "next/link";
import React from "react";

export const FooterLink = ({ className, title, href }) => {
  return (
    <Link className={className} href={href}>
      {title}
    </Link>
  );
};
