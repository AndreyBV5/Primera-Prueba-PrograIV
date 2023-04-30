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
                    I’m Andrey, and I like to
                    <br />
                    work on your next project
                </h2>
                <p className={styles.desktop}>
                    I like working with others to create design solutions.
                    <br />
                    I have done some projects
                    <br />
                    most college jobs.
                </p>
                <button><a href="linkedin.com/in/andrey-barrios-valverde-16a707274" type="button">Free Consultation</a></button>
            </article>
        </div>
    );
};

export default About;