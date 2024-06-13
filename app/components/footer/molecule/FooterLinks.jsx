import React from "react";
import { FooterLink } from "../atom/FooterLink";

export const FooterLinks = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <FooterLink
          key={item.title}
          className="hover:bg-green-600 p-2"
          title={item.title}
          href={item.href}
        />
      ))}
    </div>
  );
};
