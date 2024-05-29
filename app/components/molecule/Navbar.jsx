import NavLinks from "../atom/NavLink";

export const NavBar = () => {
  return (
    <nav className="flex gap-6 mt-6 ml-24">
      <NavLinks href="/">Link1</NavLinks>
      <NavLinks href="/">Link2</NavLinks>
      <NavLinks href="/warning">Link3</NavLinks>
    </nav>
  );
};
