"use client";

import { createContext } from "react";

const UserContext = createContext({
  dark: false,
  toggleDark: () => {}
});

export default UserContext;