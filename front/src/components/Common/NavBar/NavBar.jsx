import React from 'react'
import Icon from "../Icon"
import styles from "./NavBar.module.css"
import { useDispatch } from 'react-redux'
import { setModalCart } from '../../../redux/ui/actions'
import { toast } from 'react-toastify'

export default function NavBar() {
  const notify = () => toast("Wow so easy !");

  const dispatch = useDispatch()
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoSection}>
        <h1>SESuite</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.buttons}>
          <button onClick={() => dispatch(setModalCart(true))}>
            <Icon iconPath="ph-fill ph-shopping-cart-simple" />
          </button>
          <button onClick={notify}>
            <Icon iconPath="ph ph-heart" />
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
