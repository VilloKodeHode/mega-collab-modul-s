import { FooterLink } from "../atom/FooterLink";

export const FooterLinks = ({ state, items }) => {
  return (
    <div className="">
      {items.map((item) => (
        <DropDownItem
          key={item.title}
          className={"hover:bg-green-600 p-2"}
          {...item}
        />
      ))}
    </div>
  );
};
