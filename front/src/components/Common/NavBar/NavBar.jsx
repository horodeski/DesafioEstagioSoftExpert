import React from 'react'
import Icon from "../Icon"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoSection}>
        <h1>SESuite</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.buttons}>
          <button>
            <Icon iconPath="ph-fill ph-shopping-cart-simple" />
          </button>
          <button>
            <Icon iconPath="ph ph-heart" />
          </button>
        </div>
        <div className={styles.user}>
          <a>Geovana Horodeski</a>
          <img src="https://avatars.githubusercontent.com/u/99155494?v=4" alt="" />
        </div>
      </div>
    </nav>
  )
}
