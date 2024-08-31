import {Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import React from "react";
import {Rubik} from "next/font/google";

const tabs = [
    { href: "#", label: "Home" },
    { href: "#", label: "Features" },
    { href: "#", label: "Contact" },
];


export const Header = ({ darkMode, toggleDarkMode }) => (
    <Navbar isBordered>
        <NavbarBrand>
            <p className="font-bold text-inherit">SkyTree</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {tabs.map(item => (
                <NavbarItem key={item.label}>
                    <Link href={item.href} className="text-gray-500">{item.label}</Link>
                </NavbarItem>
            ))}
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button color="success" href="#" variant="flat">
                    Learn more
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button color="primary" onClick={toggleDarkMode}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
);