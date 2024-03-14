import React, { useState } from 'react'
import styles from "./Cart.module.css"
import Icon from '../Icon'

function Item({ desc, value }) {

    return (
        <>
            <div className={styles.list}>
                <span>{desc}</span>
                <span>{value}</span>
            </div>

        </>
    )
}
function Reckoning({ totalValue, tax, valorFinal, buy, deleteCart }) {

    const allItems = [
        {
            desc: "Valor total",
            value: `R$${totalValue}`
        },
        {
            desc: "Tax",
            value: `+ R$${tax}`
        },
        {
            desc: "Valor Final",
            value: `R$${valorFinal}`
        }
    ]

    return (
        <div className={styles.reckoning}>
            {allItems.map((i) => (
                <Item key={i.desc} desc={i.desc} value={i.value} icon={i.icon} />
            ))}

            <div className={styles.allButtons}>
                <button onClick={deleteCart}>Descartar Carrinho</button>
                <button className='btn-blue' onClick={buy}>
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}


export default Reckoning