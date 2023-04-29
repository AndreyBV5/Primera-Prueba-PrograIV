import React from "react";
import styles from "../styles/Home.module.css"

const Hero = () => {

    return (

        <section className={styles.hero}>
            <h2>Design solutions made easy</h2>
            <p className={styles.desktop}>
                With over ten years of experience in various design disciplines, I’m
                your one-stop
                <br />
                shop for your design needs.
            </p>
            <p className={styles.tablet}>
                With over ten years of experience in various design disciplines, I’m
                <br />
                your one-stop shop for your design needs.
            </p>
            <p className={styles.mobile}>
                With over ten years of experience in
                <br />
                various design disciplines, I’m your
                <br />
                one-stop shop for your design
                <br />
                needs.
            </p>
        </section>
    );
};
export default Hero;