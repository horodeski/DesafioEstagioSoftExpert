import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Icon from '../Icon'
import styles from "./Cart.module.css"
import { incrementAmount } from '../../../redux/CartFavorite/actions'

function Card({ price, name, amount, priceAmount, code, deleteItem, increment}) {
 
    return (
        <div className={styles.card}>
            <button className={styles.deletebtn} onClick={() => { deleteItem(code) }}>
                <Icon iconPath={"ph ph-trash"} />
            </button>
            <div>
                <h3>
                    {name}
                </h3>
                <span className={styles.unitPrice}>R${price}/Item</span>
                <div className={styles.priceAmount}>
                    <span>R${priceAmount}</span>
                    <div className={styles.amount}>
                        <span>{amount} Unids.</span>
                        <button onClick={() => { increment(code)}}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card