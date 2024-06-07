import Image from "next/image";
import { NavBar } from "../molecule/Navbar";

export const Header = () => {
  return (
    <div className="flex justify-center sm:justify-between min-w-fit items-center bg-green-800 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="hidden sm:flex items-center">
        <Image
          src="/components/images/LOOGOO.png"
          className="h-12 w-16"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <NavBar />
    </div>
  );
};
