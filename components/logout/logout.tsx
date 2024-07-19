"use client";
import { logoutUser } from "@/actions/auth/logout";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export const Logout = () => {
  const handlePress = () => {
    logoutUser();
  };

  return (
    <Button as={Link} href="/" onPress={handlePress} className="border-2 border-sky-500" color="primary">
      Logout
    </Button>
  );
};
