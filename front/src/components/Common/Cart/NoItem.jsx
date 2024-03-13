import React from 'react'
import Icon from '../Icon'
import styles from "./Cart.module.css"

export default function NoItem() {
    return (
        <div className={styles.noItems} >
            <Icon iconPath={"ph ph-folder-simple-dashed"} />
            <span>Não há items no seu carrinho</span>
        </div>
    )
}
