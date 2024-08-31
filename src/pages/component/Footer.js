import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHeart} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@nextui-org/react";
import {faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {Rubik} from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export default function Footer({ darkMode }) {
    return (
    <div className={`py-4 w-full text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'} ${rubik.className}`}>
        <p>&copy; 2024 SkyTree Communication Limited | All Rights Reserved</p>
        <p>Designed/Developed by AkiChan & Sh1n3zZ with <FontAwesomeIcon icon={faHeart} /></p>
        <Link href="https://github.com/skytr-ee" className={`text-gray-500 m-3`}><FontAwesomeIcon icon={faGithub} /></Link>
        <Link href="https://t.me/skytr_ee" className={`text-gray-500 m-3`}><FontAwesomeIcon icon={faTelegram} /></Link>
        <Link href="mailto:hello@skytr.ee" className={`text-gray-500 m-3`}><FontAwesomeIcon icon={faEnvelope} /></Link>
        <img
            src={'/S_0001.jpg'}
            className={`${darkMode ? 'invisible' : 'visible'} fixed bottom-0 right-3 m-0`}
            width={50}
            />
    </div>
);
}