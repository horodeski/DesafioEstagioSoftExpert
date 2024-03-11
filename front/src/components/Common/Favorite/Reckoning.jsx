import React, { useState } from 'react'

import styles from "./Favorite.module.css"
import Icon from '../Icon'

function Reckoning() {
    const [alert, setAlert] = useState(false)

    return (
        <div className={styles.reckoning}>
            <div className={styles.list}>
                <span>Cart Total</span>
                <span>R$20</span>
            </div>
            <div className={styles.list}>
                <span>Tax</span>
                <span>+ R$5.00</span>
            </div>
            <div className={styles.discount}>
                <div className={styles.list}>
                    <div onMouseEnter={() => setAlert(true)} onMouseLeave={() => setAlert(false)}>
                        <Icon iconPath={"ph ph-star"} />
                        <span>Desconto</span>
                    </div>
                    <span>- R$4.00</span>
                </div>
                {
                    alert &&
                    <div className={styles.alert}>Compras acima de 10 unidades recebem R$4.00 de desconto</div>
                }
            </div>
            <div className={styles.list} id={styles.finalle}>
                <span>Valor Final</span>
                <span>R$50.00</span>
            </div>
            <div className={styles.allButtons}>
                <button>Descartar Carrinho</button>
                <button className='btn-blue'>
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}


export default Reckoning