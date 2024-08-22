"use client";
import React from "react";
import { Link, Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { ThemeSwitch } from "../theme-switch";
import { NavbarProps } from "@/types";
import { LogoutButton } from "../logout/logoutButton";
import { Signup } from "../signup/signup";
import { LoginButton } from "../login/loginButton";

export const VendorNavbar = ({ setItemActive, item, currentUser }: NavbarProps) => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Link data-name="home" onPress={setItemActive} href="/" className="font-bold text-inherit">
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
            href="/vendor/bookings"
            onPress={setItemActive}
          >
            Bookings
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "vendorVenues" ? true : false}>
          <Link
            data-name="VendorVenues"
            color={item == "VendorVenues" ? "primary" : "foreground"}
            href="/vendor/venues"
            onPress={setItemActive}
          >
            My Venues
          </Link>
        </NavbarItem>

        <NavbarItem isActive={item == "addVenue" ? true : false}>
          <Link
            data-name="addVenue"
            color={item == "addVenue" ? "primary" : "foreground"}
            href="/vendor/add-venue"
            onPress={setItemActive}
          >
            Add Venue
          </Link>
        </NavbarItem>
        <NavbarItem isActive={item == "orders" ? true : false}>
          <Link
            data-name="orders"
            color={item == "orders" ? "primary" : "foreground"}
            href="/vendor/orders"
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
