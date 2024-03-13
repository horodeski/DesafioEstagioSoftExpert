import React from 'react'
import Icon from '../Icon'
import { useDispatch } from 'react-redux'
import { setModalCart } from '../../../redux/ui/actions'

import styles from "./Cart.module.css"

function Header() {
    const dispatch = useDispatch()

    function toggleModal() {
        dispatch(setModalCart(false))
    }

    return (
        <div className={styles.header}>
            <h2>Seu carrinho de compras</h2>
            <button onClick={toggleModal}>
                <Icon iconPath={"ph ph-x"} />
            </button>
        </div>
    )
}

export default Header