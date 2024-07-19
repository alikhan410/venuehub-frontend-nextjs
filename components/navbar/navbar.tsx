"use client";
import { NavContext } from "@/context/NavbarContext";
import { CurrentUserResponse } from "@/types";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GuestNavbar } from "./guestNavbar";
import { UserNavbar } from "./userNavbar";

import { VendorNavbar } from "./vendorNavbar";

export const Navbar: React.FC<{ currentUser: CurrentUserResponse }> = ({ currentUser }) => {
  const navContext = useContext(NavContext);

  if (!navContext) {
    return null;
  }

  const { refreshNavbar } = navContext;

  const [item, setItem] = useState("");

  useEffect(() => {
    console.log(localStorage.getItem("item"));
    const storageItem = localStorage.getItem("item");
    if (storageItem === null) return;
    setItem(storageItem);
  }, [refreshNavbar]);

  const setItemActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const newItem = e.currentTarget.getAttribute("data-name");
    if (newItem == null) return;
    localStorage.setItem("item", newItem);
    setItem(newItem); // Update state to trigger rerender
  };
  return (
    <>
      {currentUser.loggedInAs === "USER" && (
        <UserNavbar setItemActive={setItemActive} item={item} currentUser={currentUser} />
      )}
      {currentUser.loggedInAs === "VENDOR" && (
        <VendorNavbar setItemActive={setItemActive} item={item} currentUser={currentUser} />
      )}
      {currentUser.loggedInAs === null && (
        <GuestNavbar setItemActive={setItemActive} item={item} currentUser={currentUser} />
      )}
    </>
  );
};
