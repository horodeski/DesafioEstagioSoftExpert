import React from 'react'
import styles from "./Categories.module.css"
import { Icon } from '../../Common'

export default function ModalCategory() {
    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Nova Categoria</h2>
                    <button className="btn-blue">
                        <Icon iconPath={"ph ph-x"} />
                    </button>
                </div>
                <form>
                    <div className={styles.group}>
                        <label>Nome da categoria</label>
                        <input placeholder='Limite de 244 caracteres' type="text" />
                    </div>
                    <div className={styles.group}>
                        <label>Taxa</label>
                        <input placeholder='Valor em porcentagem' type="text" />
                    </div>
                    <button type="submit" className="btn-blue">Adicionar</button>
                </form>
            </div>
        </div>
    )
}
