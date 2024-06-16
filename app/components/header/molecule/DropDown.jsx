"use client"

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { DropDownContent } from "./DropDownContent"

export const DropDown = ({items}) => {
  const [ open, setOpen ] = useState(false)

  return (
    <span
      onMouseEnter={() => setOpen(true)}
      className="p-2"
    >
      <FaBars />
      <span onMouseLeave={() => setOpen(false)}>
        <DropDownContent state={open} items={items}/>
      </span>
    </span>
  );
};