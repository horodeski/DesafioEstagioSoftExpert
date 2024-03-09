import React from 'react'
import styles from "./Products.module.css"
import { Icon } from '../../Common'

function LineTable({ title, id, price, category }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>R${price}</td>
            <td>{category} (Tax: 5%)</td>
            <td>
                <div className={styles.buttons}>
                    <button><Icon iconPath={"ph ph-trash"} /></button>
                    <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                </div>
            </td>
        </tr>
    )
}

export default LineTable