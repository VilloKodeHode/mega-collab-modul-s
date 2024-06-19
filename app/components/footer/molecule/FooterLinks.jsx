import React from "react";
import { FooterLink } from "../atom/FooterLink";

export const FooterLinks = ({ items }) => {
  return (
    <div className="flex flex-col">
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
