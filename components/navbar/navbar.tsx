"use client";
import { startServices } from "@/actions/startServices";
import { NavContext } from "@/context/NavbarContext";
import { CurrentUserResponse } from "@/types";
import { PressEvent } from "@react-types/shared";
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
    const services = localStorage.getItem("services");
    if (!services) {
      //The purpose for this api call is to Start the dormant services hosted on Render
      startServices();
      localStorage.setItem("services", "started");
    }
    const storageItem = localStorage.getItem("item");
    if (storageItem === null) return;
    setItem(storageItem);
  }, [refreshNavbar]);

  const setItemActive = (e: PressEvent) => {
    const newItem = e.target.getAttribute("data-name");
    if (newItem == null) return;
    localStorage.setItem("item", newItem);
    setItem(newItem);
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
