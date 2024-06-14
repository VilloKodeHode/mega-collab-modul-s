"use client"

import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User";

const UserProvider = ({ children }) => {
  const [ darkmode, toggleDark ] = useState()

  useEffect(() => {
    // Check is user preferes darkmode
    const prefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set darkmode
    toggleDark(prefDark)
  }, [toggleDark])

  return (
    <UserContext.Provider value={{ darkmode, toggleDark }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;