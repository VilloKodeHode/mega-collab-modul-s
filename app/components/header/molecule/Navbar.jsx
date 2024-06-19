import Link from "next/link";
import MENU_LIST from "../../../data/menuItems";

import { DropDown } from "./DropDown";
import { DarkmodeToggle } from "../../features/DarkmodeToggle";

export const NavBar = () => {
  return (
    <nav className="
      flex
      items-center
      gap-4
      px-4
      rounded-lg


      text-black
      dark:text-white

      bg-element-primary
      dark:bg-element-primary-dark
    ">
      <Link className="p-2 hover:underline hover:text-element-primary-dark dark:hover:text-element-primary" href="/about">About</Link>
      <Link className="p-2 hover:underline hover:text-element-primary-dark dark:hover:text-element-primary" href="/contact">Contact</Link>
      <Link className="p-2 hover:underline hover:text-element-primary-dark dark:hover:text-element-primary" href="/pagehub">Pages</Link>
      <DarkmodeToggle icon />
      <DropDown items={MENU_LIST} />
    </nav>
  );
};
