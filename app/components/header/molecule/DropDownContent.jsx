import { NavLinks } from "../atom/NavLink";
import { DropDownItem } from "../atom/DropDownItem";

export const DropDownContent = ({ state, items }) => {
  return (
    <div className={`${!state && 'hidden'}
      absolute
      grid grid-cols-3
      right-4
      w-auto
      p-4 mt-4

      rounded-lg

      bg-element-primary
      dark:bg-element-primary-dark
      transition-colors duration-200 ease-linear
      shadow-xl
    `}>
      {items.map(item => <DropDownItem key={item.href} {...item} />)}
    </div>
  );
};