"use client";
import React from "react";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { NavbarProps } from "@/types";
import { ThemeSwitch } from "../theme-switch";
import { LogoutButton } from "../logout/logoutButton";
import { Signup } from "../signup/signup";
import { LoginButton } from "../login/loginButton";

export const UserNavbar = ({ setItemActive, item, currentUser }: NavbarProps) => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link data-name="home" href="/" onPress={setItemActive} className="font-bold text-inherit">
          VENUEHUB
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={item == "home" ? true : false}>
          <Link data-name="home" color={item == "home" ? "primary" : "foreground"} href="/" onPress={setItemActive}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "venues" ? true : false}>
          <Link
            data-name="venues"
            color={item == "venues" ? "primary" : "foreground"}
            href="/venues"
            onPress={setItemActive}
          >
            All Venues
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "bookings" ? true : false}>
          <Link
            data-name="bookings"
            color={item == "bookings" ? "primary" : "foreground"}
            href="/user/bookings"
            onPress={setItemActive}
          >
            My Bookings
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "orders" ? true : false}>
          <Link
            data-name="orders"
            color={item == "orders" ? "primary" : "foreground"}
            href="/user/orders"
            onPress={setItemActive}
          >
            Orders
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitch />
        <NavbarItem className="hidden lg:flex">{currentUser.isLogged ? <LogoutButton /> : <LoginButton />}</NavbarItem>
        <NavbarItem>{currentUser.isLogged ? "" : <Signup />}</NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
