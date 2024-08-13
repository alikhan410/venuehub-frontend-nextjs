"use client";
import React from "react";
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";

import { NavbarProps } from "@/types";
import { ThemeSwitch } from "../theme-switch";

import { Logout } from "../logout/logout";
import { Signup } from "../signup/signup";
import { Login } from "../login/login";

export const GuestNavbar = ({ setItemActive, item, currentUser }: NavbarProps) => {
  return (
    <NextUINavbar>
      {/* <div>
        <div
          aria-hidden="true"
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu"
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute left-[max(25rem,calc(40%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu-2xl "
        >
          <div
            style={{
              clipPath:
                "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
            }}
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div> */}
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
