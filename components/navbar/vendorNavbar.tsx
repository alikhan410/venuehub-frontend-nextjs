"use client";
import React from "react";
import { Link, Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";
import { NavbarProps } from "@/types";
import { Login } from "../login/login";
import { Logout } from "../logout/logout";
import { Signup } from "../signup/signup";

export const VendorNavbar = ({ setItemActive, item, currentUser }: NavbarProps) => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link data-name="home" onClick={setItemActive} href="/" className="font-bold text-inherit">
          VENUEHUB
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={item == "home" ? true : false}>
          <Link data-name color={item == "home" ? "primary" : "foreground"} href="/" onClick={setItemActive}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "allvenues" ? true : false}>
          <Link
            data-name="allvenues"
            color={item == "allvenues" ? "primary" : "foreground"}
            href="/"
            onClick={setItemActive}
          >
            All Venues
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "bookings" ? true : false}>
          <Link
            data-name="bookings"
            color={item == "bookings" ? "primary" : "foreground"}
            href="/vendor/bookings"
            onClick={setItemActive}
          >
            Bookings
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "myvenues" ? true : false}>
          <Link
            data-name="myvenues"
            color={item == "myvenues" ? "primary" : "foreground"}
            href="/vendor/venue"
            onClick={setItemActive}
          >
            My Venues
          </Link>
        </NavbarItem>

        <NavbarItem isActive={item == "addvenue" ? true : false}>
          <Link
            data-name="addvenue"
            color={item == "addvenue" ? "primary" : "foreground"}
            href="/vendor/add-venue"
            onClick={setItemActive}
          >
            Add Venue
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "orders" ? true : false}>
          <Link
            data-name="orders"
            color={item == "orders" ? "primary" : "foreground"}
            href="/vendor/orders"
            onClick={setItemActive}
          >
            Orders
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
