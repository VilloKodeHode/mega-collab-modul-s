import React from "react";
// import PropTypes from "prop-types";
import { FaRegSun } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import SearchBox from "./searchbox";

export default function SearchBar(props: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      {" "}
      <div className="h-[80px] w-full flex justify-between items-center max-w-7x1 px-3 mx-auto "></div>
      <p className="flex items-center justify-center gap-2 ">
        <h2 className="text-gray-500 text-3xl">Vær</h2>
        <FaRegSun className="text-3xl mt-1 text-yellow-300" />
      </p>
      {/* */}
      <section className="flex items-center gap-2">
        <BiCurrentLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
        <GrLocation className="text-3xl" />
        <p className="text-slate-900/80 text-sm">Norge</p>
        <div>
          {/*SearchBox*/}
          <SearchBox />
        </div>
      </section>
      searchbar
    </nav>
  );
}

SearchBar.propTypes = {};
