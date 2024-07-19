"use client";
import React from "react";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";

import { NavbarProps } from "@/types";
import { ThemeSwitch } from "../theme-switch";

import { Logout } from "../logout/logout";
import { Login } from "../login/login";
import { Signup } from "../signup/signup";

export const GuestNavbar = ({ setItemActive, item, currentUser }: NavbarProps) => {
  
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">
          VENUEHUB
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={item == "home" ? true : false}>
          <Link data-name="home" color={item == "home" ? "" : "foreground"} href="/" onClick={setItemActive}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "allvenues" ? true : false}>
          <Link
            data-name="allvenues"
            color={item == "allvenues" ? "" : "foreground"}
            href="/venues"
            onClick={setItemActive}
          >
            All Venues
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarItem className="hidden lg:flex">{currentUser.isLogged ? <Logout /> : <Login />}</NavbarItem>
        <NavbarItem>{currentUser.isLogged ? "" : <Signup />}</NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
