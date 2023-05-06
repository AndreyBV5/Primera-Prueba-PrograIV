import React from 'react'
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import Logo from "../public/Logo Andrey.png"
import { Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <article>
            <h2>Book a call with me</h2>
            <p className={styles.desktop}>
              I’d love to have a chat to see how I can help you. The best first
              <br/>
              step is for us to discuss your project during a free consultation.
              <br/>
              Then we can move forward from there.
            </p>
          </article>
          <button type="button">Free Consultation</button>
        </div>
        <nav className={styles.nav}>
          <button type="button">
            <Image src={Logo} alt="" width={150} height={100}/>
          </button>
          <button type="button">Free Consultation</button>
        </nav>
      </footer>
  )
}

export default Footer