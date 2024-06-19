import Link from "next/link";
import MENU_LIST from "../../../data/menuItems";
import { DarkmodeToggle } from "../../base/DarkmodeToggle";
import { DropDown } from "./DropDown";

export const NavBar = () => {
  return (
    <nav className="
      flex
      items-center
      max-[500px]:justify-between
      max-[500px]:w-full
      gap-4
      px-4
      rounded-lg



      text-black
      dark:text-white
      decoration-element-secondary

      bg-element-primary
      dark:bg-element-primary-dark

      shadow-lg
    ">
      <Link className="p-2 hover:underline hover:text-element-primary-dark dark:hover:text-element-primary sm:hidden" href="/">Home</Link>
      <Link className="p-2 hover:underline hover:text-element-primary-dark dark:hover:text-element-primary" href="/about">About</Link>
      <Link className="p-2 hover:underline hover:text-element-primary-dark dark:hover:text-element-primary" href="/contact">Contact</Link>
      <DarkmodeToggle icon />
      <DropDown items={MENU_LIST} />
    </nav>
  );
};
