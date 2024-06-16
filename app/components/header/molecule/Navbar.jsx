import Link from "next/link";
import MENU_LIST from "../../../data/menuItems";
import { DarkmodeToggle } from "../../base/DarkmodeToggle";
import { DropDown } from "./DropDown";

export const NavBar = () => {
  return (
    <nav className="
      flex
      items-center
      rounded-lg
      gap-4
      px-4



      text-black
      dark:text-white

      bg-element-primary
      dark:bg-element-primary-dark
    ">
      <Link className="p-2" href="/about">About</Link>
      <Link className="p-2" href="/contact">Contact</Link>
      <DarkmodeToggle icon />
      <DropDown items={MENU_LIST} />
    </nav>
  );
};
