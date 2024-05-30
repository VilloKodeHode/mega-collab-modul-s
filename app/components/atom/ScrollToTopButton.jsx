"use client";

import Image from "next/image";

export function Btn() {
  return (
    <button className="p-5 bg-grey-400 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-full shadow-md">
      <Image
        src="/images/arrow.png"
        alt="The arrow icon"
        width={20}
        height={20}
      />
    </button>
  );
}
