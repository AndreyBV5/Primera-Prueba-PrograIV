import React from "react";
import Image from "next/image";
import Logo from '../public/Logo Andrey.png'
import styles from "../styles/Home.module.css"


const Header = () => {
    return (
        <nav className={styles.nav}>
            <button type='button'>
                <Image src={Logo} alt="" width={150} height={100} />
            </button>

            <ul className={styles.lu}>
                <li><a href="default.html">Proyects</a></li>
                <li><a href="news.asp">About</a></li>
                <li><a href="contact.asp">Hiring</a></li>
                <li><a href="about.asp">Contacts</a></li>
            </ul>

        </nav>

    )
}

export default Header