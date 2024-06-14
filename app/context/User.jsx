"use client";

import { createContext } from "react";

const UserContext = createContext({
  darkmode: true,
  toggleDark: () => {}
});

export default UserContext;