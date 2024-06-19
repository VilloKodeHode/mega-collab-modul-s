import Link from "next/link";
import React from "react";

export const DropDownItem = ({ title, href }) => {
  return (
    <Link className="p-1 hover:underline hover:text-slate-500 dark:hover:text-slate-300" href={href}>{title}</Link>
  )
}