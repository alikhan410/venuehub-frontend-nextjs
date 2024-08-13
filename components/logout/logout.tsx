"use client";
import { logoutUser } from "@/actions/auth/logout";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Logout = () => {
  const router = useRouter();
  const handlePress = () => {
    logoutUser();
    router.push("/");
  };

  return (
    <Button onPress={handlePress} className="border-2" color="primary">
      Logout
    </Button>
  );
};
