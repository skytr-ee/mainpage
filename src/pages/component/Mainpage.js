import {Card, CardBody} from "@nextui-org/react";
import {ReactTyped} from "react-typed";
import React from "react";
import {Rubik} from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const array_usage = [
    'Workflow Automation',
    'Social Media',
    'E-commerce',
    'NFTs',
    'Blockchain Development',
    'Decentralized Finance',
];
export const MainContent = ({ darkMode }) => (
    <Card className={`h-max m-8 md:m-32 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-lg rounded-lg`}>
        <CardBody className={`flex flex-col md:flex-row items-center md:items-start`}>
            <div className="text-center md:text-left">
                <h1 className={`text-6xl text-cyan-500 ${rubik.className} mb-4`}>
                    SkyTree
                </h1>
                <h3 className={`text-3xl ${darkMode ? 'text-gray-300' : 'text-gray-500'} ${rubik.className}`}>
                    SkyTree is a fast, secure, and reliable decentralized Web3.0 platform<br/>
                    for&nbsp;
                    <ReactTyped
                        className={`text-lime-600`}
                        strings={array_usage}
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
);