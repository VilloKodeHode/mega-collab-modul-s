import Link from "next/link";
import React from "react";

export const FooterLinksItem = ({ className, title, href }) => {
  return (
    <Link className={className} href={href}>
      {title}
    </Link>
  );
};
