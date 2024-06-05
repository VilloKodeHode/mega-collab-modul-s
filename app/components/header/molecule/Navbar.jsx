import { MENU_LIST } from "../../../data/menuItems";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  return (
    <nav className="flex md:max-w-[80%] max-w-[60%] justify-end">
      {MENU_LIST.map( item => (
        <NavBarItem key={item.title} {...item} />
      ))}
    </nav>
  );
};
