import Button from "./button";

const Header = () => {
  return (
    <div className="flex bg-green-800 gap-36 p-12 w-full drop-shadow-[0_2px_2px_rgba(255,255,255,0.75)]">
      <div className="mx-24 gap mr-64">
        <img
          src="/components/images/LOOGOO.png"
          className="h-12 w-16 mt-6 ml-16"
          alt=""
        />
      </div>
      <h1 className="text-6xl font-extralight">Vidars hjørne</h1>
      <div className="flex gap-6 mt-6 ml-24">
        <h4>link1</h4>
        <h4>link2</h4>
        <h4>link3</h4>
      </div>
    </div>
  );
};

export default Header;
