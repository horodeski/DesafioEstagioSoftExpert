import React from 'react'
import Icon from '../Icon'
import styles from "./Cart.module.css"


function Card() {
    return (
        <div className={styles.card}>
            <button>
                <Icon iconPath={"ph ph-trash"} />
            </button>
            <div>
                <h3>
                    Bola
                </h3>
                <span className={styles.unitPrice}>R$2.00/Item</span>
                <div className={styles.priceAmount}>
                    <span>R$20.00</span>
                    <span>10 Unids.</span>
                </div>
            </div>
        </div>
    )
}

export default Card