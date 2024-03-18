import React from 'react'
import Icon from "../Icon"
import styles from "./NavBar.module.css"
import { useDispatch } from 'react-redux'
import { setModalCart } from '../../../redux/ui/actions'

export default function NavBar() {
  const dispatch = useDispatch()
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoSection}>
        <h1>SESTORE</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(setModalCart(true))}>
            <Icon iconPath="ph-fill ph-shopping-cart-simple" />
          </button>
        </div>
        <div className={styles.user}>
          <span>Geovana Horodeski</span>
          <img src="https://avatars.githubusercontent.com/u/99155494?v=4" alt="" />
        </div>
      </div>
    </nav>
  )
}
