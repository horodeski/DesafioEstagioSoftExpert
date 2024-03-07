import React from 'react'
import styles from "./Buy.module.css"

function CardProduct() {
    return (
        <div className={styles.productCard}>
            <div className={styles.titlePrice}>
                <span className={styles.title}>Bola</span>
                <span>R$5.00</span>
            </div>
            <span>Toys</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam consectetur vitae officia reiciendis voluptatesi...</p>
            <div className={styles.amount}>
                <button>-</button>
                <span>2</span>
                <button>+</button>
            </div>
            <button className='btn-blue'>
                Adicionar ao carrinho
            </button>
        </div>
    )
}

export default CardProduct