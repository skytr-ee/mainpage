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


const rubik = Rubik({ subsets: ["latin"] });

 function Index() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-0 bg-gray-50`}
        >
            <Navbar isBordered>
                <NavbarBrand>
                    <p className="font-bold text-inherit">SkyTree</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link href="#" className={`text-gray-500`}>Home</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className={`text-gray-500`}>Features</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className={`text-gray-500`}>Contact</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={``} color="success" href="#" variant="flat">
                            Learn more
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            <Card
                className={`h-max m-8 md:m-32 bg-white shadow-lg rounded-lg`}>
                <CardBody
                    className={`flex flex-col md:flex-row items-center md:items-start`}>
                    <div className="text-center md:text-left">
                        <h1
                            className={`text-6xl text-cyan-500 ${rubik.className} mb-4`}
                        >
                            SkyTree
                        </h1>
                        <h3
                            className={`text-3xl text-gray-500 ${rubik.className}`}
                        >
                            SkyTree is a fast, secure, and reliable decentralized Web3.0 platform<br/>
                            for&nbsp;
                            <ReactTyped
                                className={`text-lime-600`}
                                strings={[
                                    'Workflow Automation',
                                    'Social Media',
                                    'E-commerce',
                                    'NFTs',
                                    'Blockchain Development',
                                    'Decentralized Finance',
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </h3>
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-8">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="SkyTree Logo"
                            width={200}
                            height={200}
                            className="rounded-full shadow-lg"
                        />
                    </div>
                </CardBody>
            </Card>

            <div className={`py-4 w-full text-center text-gray-600 ${rubik.className}`}>
                <p>&copy; 2024 SkyTree Communication Limited | All Rights Reserved</p>
                <p>Designed/Developed by AkiChan & Sh1n3zZ with <FontAwesomeIcon icon={faHeart} /></p>
                <Link href="https://github.com/skytr-ee" className={`text-gray-500 m-3`}><FontAwesomeIcon icon={faGithub} /></Link>
                <Link href="https://t.me/skytr_ee" className={`text-gray-500 m-3`}><FontAwesomeIcon icon={faTelegram} /></Link>
                <Link href="mailto:hello@skytr.ee" className={`text-gray-500 m-3`}><FontAwesomeIcon icon={faEnvelope} /></Link>

            </div>
            </main>
    );
}

export default Index;
