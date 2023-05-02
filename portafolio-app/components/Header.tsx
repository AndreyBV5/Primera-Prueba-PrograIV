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
            <section id = "Header">
            <ul className={styles.ul}>
                <li><a href="#Projects">Proyects</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#About">Hiring</a></li>
                <li><a href="#UI/UX">Contacts</a></li>
            </ul>
            </section>

        </nav>

    )
}

export default Header