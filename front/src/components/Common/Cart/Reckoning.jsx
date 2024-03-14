import React, { useState } from 'react'
import styles from "./Cart.module.css"
import Icon from '../Icon'

function Item({ desc, value, icon }) {
    const [alert, setAlert] = useState(false)

    return (
        <>
            {icon ?
                <div className={styles.discount}>
                    <div className={styles.list}>
                        <div onMouseEnter={() => setAlert(true)} onMouseLeave={() => setAlert(false)}>
                            <Icon iconPath={"ph ph-star"} />
                            <span>{desc}</span>
                        </div>
                        <span>{value}</span>
                    </div>
                    {
                        alert &&
                        <div className={styles.alert}>Compras acima de 10 unidades recebem R$4.00 de desconto</div>
                    }
                </div>
                :
                <>
                    <div className={styles.list}>
                        <span>{desc}</span>
                        <span>{value}</span>
                    </div>
                </>
            }
        </>
    )
}
function Reckoning({totalValue, tax, valorFinal, discount}) {

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
            icon: "ph ph-star",
            desc: "Desconto",
            value: `- R$${discount}`
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
                <button>Descartar Carrinho</button>
                <button className='btn-blue'>
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}


export default Reckoning