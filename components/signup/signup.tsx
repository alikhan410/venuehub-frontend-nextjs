"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";

import { useState } from "react";
import { SignupForm } from "./signupForm";
import { signupUser, signupVendor } from "@/actions/auth/singup";
import { ErrorResponse } from "@/types/index";

export const Signup = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selected, setSelected] = useState<string | number>("user");

  const [errorUser, setErrorUser] = useState<JSX.Element | null>(null);
  const [errorVendor, setErrorVendor] = useState<JSX.Element | null>(null);

  const handleSignupUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const details = {
      username: formData.get("username")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
    };

    const res = await signupUser(details);

    if ((res as ErrorResponse).error) {
      setErrorUser(<Chip color="danger">{(res as ErrorResponse).message}</Chip>);
    } else {
      setErrorUser(null);
      onClose();
    }
  };

  const handleSignupVendor = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const details = {
      username: formData.get("username")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      firstName: formData.get("firstName")?.toString() || "",
      lastName: formData.get("lastName")?.toString() || "",
    };

    const res = await signupVendor(details);

    if ((res as ErrorResponse).error) {
      console.log(res);
      setErrorVendor(<Chip color="danger">{(res as ErrorResponse).message}</Chip>);
    } else {
      setErrorVendor(null);
      onClose();
    }
  };

  const customOnClose = () => {
    setErrorUser(null);
    setErrorVendor(null);
    onClose();
  };

  return (
    <>
      <Button onPress={onOpen} className="relative overflow-hidden">
        <span className="absolute inset-0 bg-pink-300  dark:bg-pink-500 blur-md"></span>
        <span className="relative">Signup</span>
      </Button>

      <Modal onClose={customOnClose} isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex justify-center">
                {" "}
                {`${(selected as String).toUpperCase()} SIGN UP`}{" "}
              </ModalHeader>
              <div className="grid grid-cols-1">
                <Tabs className="justify-self-center" selectedKey={selected} onSelectionChange={setSelected}>
                  <Tab key="user" title="User">
                    <form onSubmit={handleSignupUser}>
                      <ModalBody>
                        <SignupForm />
                        <div className="flex justify-around">{errorUser ? errorUser : ""}</div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={customOnClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Sign up
                        </Button>
                      </ModalFooter>
                    </form>
                  </Tab>

                  <Tab key="vendor" title="Vendor">
                    <form onSubmit={handleSignupVendor}>
                      <ModalBody>
                        <SignupForm />
                        <div className="flex justify-around">{errorVendor ? errorVendor : ""}</div>
                      </ModalBody>

                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={customOnClose}>
                          Close
                        </Button>
                        <Button color="primary" type="submit">
                          Sign up
                        </Button>
                      </ModalFooter>
                    </form>
                  </Tab>
                </Tabs>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
