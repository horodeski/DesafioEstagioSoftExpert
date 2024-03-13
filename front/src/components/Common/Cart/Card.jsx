import React from 'react'
import { useDispatch } from 'react-redux'
import Icon from '../Icon'
import styles from "./Cart.module.css"
import { removeItem } from '../../../redux/CartFavorite/actions'



function Card({ price, name, amount, priceAmount, code, deleteItem }) {

    return (
        <div className={styles.card}>
            <button onClick={deleteItem}>
                <Icon iconPath={"ph ph-trash"} />
            </button>
            <div>
                <h3>
                    {name}
                </h3>
                <span className={styles.unitPrice}>R${price}/Item</span>
                <div className={styles.priceAmount}>
                    <span>R${priceAmount}</span>
                    <span>{amount} Unids.</span>
                </div>
            </div>
        </div>
    )
}

export default Card