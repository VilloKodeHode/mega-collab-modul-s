
import {MENU_LIST} from "../../../data/menuItems"
import NavLinks from "../atom/NavLink";

export const NavBar = () => {
  return (
    <nav className="flex md:max-w-[80%] max-w-[60%] flex-wrap justify-end gap-6">
      {MENU_LIST.map((menu)=> (
      <NavLinks key={menu.text} href={menu.href}>{menu.text}</NavLinks>  
      ))}
    </nav>
  );
};
