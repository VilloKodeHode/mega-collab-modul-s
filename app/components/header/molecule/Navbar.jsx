import { MENU_LIST } from "../../../data/menuItems";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
  return (
    <nav className="flex">
      {MENU_LIST.map( item => (
        <NavBarItem key={item.title} {...item} />
      ))}
    </nav>
  );
};
