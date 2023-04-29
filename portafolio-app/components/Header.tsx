import React from "react";
import Image from "next/image";
import Logo from '../public/Logo Andrey.png'
import styles from "../styles/Home.module.css"


const Header = () => {
    return (
        <nav className={styles.nav}>
            <button
                type='button'>
                <Image src={Logo} alt="" width={150} height={100} />
            </button>

            <li>< a href="#">Proyectos</a></li>
            <li>< a href="#">Informacion</a></li>
            <li>< a href="#">Contrataciones</a></li>
            <li>< a href="#">Contacto</a></li>

        </nav>
    )
}

export default Header