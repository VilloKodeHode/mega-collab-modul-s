"use client"

import { useState } from "react";
import { DropDownContent } from "./DropDownContent"
import Link from "next/link";

export const DropDown = (props) => {
  const { title, href, icon, children } = props;
  const [ open, setOpen ] = useState(false)

  return (
    <div className="p-4 text-xl relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span className="hover:text-red-200">
        <Link href={href}>
          {title}
        </Link>
      </span>
      <DropDownContent state={open} items={children} />
    </div>
  );
};