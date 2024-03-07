import React from 'react'
import styles from "./NavBar.module.css"


export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoSection}>
        <h1>SESuite</h1>
      </div>
      <div className={styles.user}>
        <a href=''>Geovana Horodeski</a>
        <img src="https://avatars.githubusercontent.com/u/99155494?v=4" alt="" />
      </div>
    </nav>
  )
}
