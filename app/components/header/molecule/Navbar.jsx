import { MENU_LIST } from "../../../data/menuItems";
import { DarkmodeToggle } from "../../base/DarkmodeToggle";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  return (
    <nav className="flex">
      {MENU_LIST.map( item => (
        <NavBarItem key={item.title} {...item} />
      ))}
      <div className="text-xl p-4 hover:text-red-200">
        <DarkmodeToggle icon />
      </div>
    </nav>
  );
};
