import Link from "next/link";
import { DropDown } from "./DropDown";

interface NavBarItem {
  title: string;
  href: string;
  icon: string;
  children: [{
    title: string;
    href: string;
  }];
}

export const NavBarItem = (props: NavBarItem) => {
  const { title, href, icon, children } = props;

  if (children) {
    return (
      <DropDown key={title} {...props} />
    );
  } else {
    return (
      <div className="text-xl p-4 hover:text-red-200">
        <Link key={title} href={href}>{title}</Link>
      </div>
    );
  }
};
