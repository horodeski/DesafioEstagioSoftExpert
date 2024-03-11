import React from 'react'
import Icon from '../Icon'
import styles from "./Favorite.module.css"


function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.actions}>
                <button>
                    <Icon iconPath={"ph ph-trash"} />
                </button>
                <button>
                    <Icon iconPath={"ph ph-shopping-cart-simple"} />
                </button>
            </div>
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