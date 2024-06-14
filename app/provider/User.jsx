"use client"

import { useContext, useState } from "react";
import UserContext from "../context/User";

const UserProvider = ({ children }) => {
  const [ dark, toggleDark ] = useState('dark')

  return (
    <UserContext.Provider value={{ dark, toggleDark }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;