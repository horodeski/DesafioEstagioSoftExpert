import React from 'react'
import styles from "../Dashboard.module.css"

export default function Card({onClick}) { 
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.row}>
                <span>Bola</span>
                <span>5 Unids.</span>
            </div>
            <div className={styles.row}>
                <span>Brinquedos • 5%</span>
                <span>R$5.00</span>
            </div>
        </div>
    )
}
