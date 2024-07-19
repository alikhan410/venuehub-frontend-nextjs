"use client";
import React from "react";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { NavbarProps } from "@/types";
import { ThemeSwitch } from "../theme-switch";
import { Login } from "../login/login";
import { Logout } from "../logout/logout";
import { Signup } from "../signup/signup";

export const UserNavbar = ({ setItemActive, item, currentUser }: NavbarProps) => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link data-name="home" href="/" onClick={setItemActive} className="font-bold text-inherit">
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
        <NavbarItem isActive={item == "mybookings" ? true : false}>
          <Link
            data-name="mybookings"
            color={item == "mybookings" ? "" : "foreground"}
            href="/bookings"
            onClick={setItemActive}
          >
            My Bookings
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "orders" ? true : false}>
          <Link
            data-name="orders"
            color={item == "orders" ? "" : "foreground"}
            href="/user/orders"
            onClick={setItemActive}
          >
            Orders
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">{currentUser.isLogged ? <Logout /> : <Login />}</NavbarItem>
        <NavbarItem>{currentUser.isLogged ? "" : <Signup />}</NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
