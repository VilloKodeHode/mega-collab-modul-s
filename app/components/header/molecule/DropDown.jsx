"use client"

import { useState } from "react";
import { NavLinks } from "../atom/NavLink";
import { DropDownContent } from "./DropDownContent"

export const DropDown = (props) => {
  const { title, href, icon, children } = props;
  const [ open, setOpen ] = useState(false)

  return (
    <div className="p-4 text-xl relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span className="hover:text-red-200">
        <NavLinks key={title} href={href}>
          {title}
        </NavLinks>
      </span>
      <DropDownContent state={open} items={children} />
    </div>
  );
};