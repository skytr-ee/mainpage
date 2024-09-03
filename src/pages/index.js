import {Inter, Rubik} from "next/font/google";
import {ReactTyped} from 'react-typed';
import React from "react";
import {
    Button,
    Card,
    CardBody,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faHeart} from "@fortawesome/free-solid-svg-icons";
import Header from "@/pages/component/header";
import MainContent from "@/pages/component/main";
import Footer from "@/pages/component/footer";
export default function Home() {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-0 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainContent darkMode={darkMode} />
            <Footer darkMode={darkMode} />
        </main>
    );
}
