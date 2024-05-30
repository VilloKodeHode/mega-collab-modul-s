import Image from "next/image";
import { NavBar } from "../molecule/Navbar";

export const Header = () => {
  return (
    <div className="flex items-center min-h-20 py-8 md:px-12 px-6 bg-green-800 justify-between w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="">
        <Image
          src="/components/images/LOOGOO.png"
          className="h-12 w-16"
          alt=""
          width={150}
          height={150}
        />
      </div>
      <NavBar/>
    </div>
  );
};

