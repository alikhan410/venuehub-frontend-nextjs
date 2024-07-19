"use client";

import { createContext, useState } from "react";

export interface NavContextType {
  refreshNavbar: string;
  refreshHandler: (item: string) => void;
}

export const NavContext = createContext<NavContextType | null>(null);

export function NavProvider({ children }: { children: React.ReactNode }) {
  const [refreshNavbar, setRefreshNavbar] = useState("");

  const refreshHandler = (item: string) => {
    setRefreshNavbar(item);
  };

  return <NavContext.Provider value={{ refreshNavbar, refreshHandler }}>{children}</NavContext.Provider>;
}
