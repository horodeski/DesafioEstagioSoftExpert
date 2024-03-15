import React from 'react'

import styles from "./Comprar.module.css"
import { Products, Descontos } from '../../components/Buy';
import History from '../../components/Buy/Sections/History/History';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <h1>Desfrute de Grandes Compras com Pouco Dinheiro!</h1>
                <div>
                    <p>Aproveite assine nossa newletter para receber todas as nossas promoções</p>
                    <div className={styles.newsletter}>
                        <input type="email" placeholder='Seu melhor email' name="" id="" />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Comprar() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Products />
                <Descontos />
                <History />
            </div>
        </div>
    )
}

export default Comprar;