import React from "react";
import styles from "../styles/Home.module.css"
import Profile from "../public/Perfil Andrey.jpeg"
import Image from "next/image";

const About = () => {
    return (

        <div className={styles.about}>
            <figure>
            <Image src={Profile} alt="" width={400} height={250} />
            </figure>
            <article>
                <h2 className={styles.desktop}>
                    I’m Amy, and I’d love to
                    <br />
                    work on your next project
                </h2>
                <p className={styles.desktop}>
                    I love working with others to create beautiful design solutions.
                    <br />
                    I’ve designed everything from brand illustrations to complete
                    <br />
                    mobile apps. I’m also handy with a camera!
                </p>
                <button><a href="linkedin.com/in/andrey-barrios-valverde-16a707274" type="button">Free Consultation</a></button>
            </article>
        </div>
    );
};

export default About;