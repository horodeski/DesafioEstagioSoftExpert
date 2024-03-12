import React from 'react'
import Icon from '../Icon'
import styles from "./Cart.module.css"


function Card({ price, name, amount }) {
    return (
        <div className={styles.card}>
            <button>
                <Icon iconPath={"ph ph-trash"} />
            </button>
            <div>
                <h3>
                    {name}
                </h3>
                <span className={styles.unitPrice}>R${price}/Item</span>
                <div className={styles.priceAmount}>
                    <span>R$7</span>
                    <span>{amount} Unids.</span>
                </div>
            </div>
        </div>
    )
}

export default Card