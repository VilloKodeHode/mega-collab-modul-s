import Image from "next/image";
import { NavBar } from "../molecule/Navbar";
import Link from "next/link";
import { HeaderBackdrop } from "../atom/HeaderBackdrop";

export const Header = () => {
  return (
    <header className="
      z-[9999]
      fixed flex
      justify-end
      sm:justify-between
      items-center
      w-full
      p-4
    ">
      <HeaderBackdrop />
      <div className="
        max-sm:hidden
        rounded-lg
        p-2

        bg-element-primary
        dark:bg-element-primary-dark
      ">
        <Link href="/">
          <Image
            src="/components/images/LOOGOO.png"
            className="h-8 w-10"
            alt="Site logo"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <NavBar />
    </header>
  );
};
