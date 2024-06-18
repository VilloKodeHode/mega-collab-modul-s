import { NavLinks } from "../atom/NavLink";
import { DropDownItem } from "../atom/DropDownItem";

export const DropDownContent = ({ state, items }) => {
  return (
    <div className={`${!state && 'hidden'}
      absolute
      right-4
      w-auto

      mt-4

      grid
      grid-cols-3

      p-2
      rounded-lg


      bg-element-primary
      dark:bg-element-primary-dark
    `}>
      {items.map(item => <DropDownItem key={item.href} {...item} />)}
    </div>
  );
};