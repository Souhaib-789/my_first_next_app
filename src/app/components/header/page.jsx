import Link from 'next/link'
import React from 'react'
import styles from '../../styles/header.module.css'

const Header = () => {
  return (
    <div className={styles.nav_container}>
      <ul className={styles.list}>
      <li className={styles.link}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.link}>
        <Link href="#about">About</Link>
      </li>
      <li className={styles.link}>
        <Link href="#services">Services</Link>
      </li>
      <li className={styles.link}>
        <Link href="#reviews">Reviews</Link>
      </li>
      <li className={styles.link}>
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
    </div>
  )
}

export default Header