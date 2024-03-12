import React, { useState } from 'react'
import Icon from "../Common/Icon"
import styles from "./Buy.module.css"

function CardProduct({ name, category, description, price, toggleCart, amount }) {
    const [amount, setAmount] = useState(1)
    function increment() {
        setAmount(amount + 1)
    }
    function decrement() {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }
    return (
        <div className={styles.productCard}>
            <div className={styles.titlePrice}>
                <span className={styles.title}>{name}</span>
                <span>R${price}</span>
            </div>
            <span>{category}</span>
            <p>{description}</p>
            <div className={styles.right}>
                <div className={styles.amount}>
                    <button onClick={decrement}>-</button>
                    <span>{amount}</span>
                    <button onClick={increment}>+</button>
                </div>
                <div className={styles.allButtons} onClick={toggleCart}>
                    <button className='btn-blue'>
                        Adicionar ao carrinho
                    </button>
                    <button className='btn-green'>
                        <Icon iconPath="ph ph-heart" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct