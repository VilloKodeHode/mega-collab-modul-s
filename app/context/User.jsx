"use client";

import { createContext } from "react";

const UserContext = createContext()

/* const UserContext = createContext({
  darkmode: false,
  toggleDark: () => {}
}); */

export default UserContext;