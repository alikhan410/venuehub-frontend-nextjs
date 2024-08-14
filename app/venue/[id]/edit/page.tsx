"use client";
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from "@nextui-org/react";

export default function Page() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem key="home" href="/home">
          Home
        </DropdownItem>
        <DropdownItem key="about" href="/about">
          About
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
