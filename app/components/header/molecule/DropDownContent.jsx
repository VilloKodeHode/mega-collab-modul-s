import { NavLinks } from "../atom/NavLink";
import { DropDownItem } from "../atom/DropDownItem";

export const DropDownContent = ({ state, items }) => {

  return (
    <div className={`${!state && 'hidden'} grid grid-cols-3 gap-4 text-base absolute w-max bg-green-700`}>
      {items.map(item => (
          <DropDownItem key={item.title} className={"hover:bg-green-600 p-2"} {...item}/>
      ))}
    </div>
  );
};