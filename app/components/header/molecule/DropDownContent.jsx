import { NavLinks } from "../atom/NavLink";
import { DropDownItem } from "../atom/DropDownItem";

export const DropDownContent = ({ state, items }) => {

  return (
    <div className={`${!state && 'hidden'} fixed w-full sm:right-0 sm:left-auto left-0  grid grid-cols-4 sm:mr-16 text-base sm:w-max bg-green-700`}>
      {items.map(item => (
          <DropDownItem key={item.title} className={"hover:bg-green-600 p-2"} {...item}/>
      ))}
    </div>
  );
};