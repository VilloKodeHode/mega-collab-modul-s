import Link from "next/link";
import React from "react";

export const DropDownItem = ({ title, href }) => {
  return (
    <Link className="p-1 hover:underline" href={href}>{title}</Link>
  )
}