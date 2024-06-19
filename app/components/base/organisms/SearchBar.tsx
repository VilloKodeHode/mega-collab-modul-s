// import PropTypes from "prop-types";

import React, { useState } from "react";
import PropTypes from "prop-types";

import { FaRegSun } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import SearchBox from "../molecyles/SearchBox";



type Props = {};

export default function SearchBar(props: Props) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("Search submitted:", searchValue);
  };
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      {" "}
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto "></div>
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

          <SearchBox
            value={searchValue}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
      searchbar
    </nav>
  );
}

SearchBar.propTypes = {};
