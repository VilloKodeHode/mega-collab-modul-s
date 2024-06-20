import { NavLinks } from "../atom/NavLink";
import { DropDownItem } from "../atom/DropDownItem";

export const DropDownContent = ({ state, items }) => {
  return (
    <div className={`${!state && 'hidden'}
      absolute
      grid grid-cols-3
      right-4
      max-[500px]:left-4
      w-auto
      p-4 mt-4

      decoration-element-secondary
      bg-element-primary
      dark:bg-element-primary-dark
      shadow-xl

      rounded-lg
      border
      border-element-secondary
    `}>
      {items.map(item => <DropDownItem key={item.href} {...item} />)}
    </div>
  );
};