import React, { useState } from 'react'
import { Icon } from '../../Common'
import styles from "./Products.module.css"

function LineTable({ name, code, price, category, tax, amount }) {
    const [alert, setAlert] = useState(false)

    function productTaxed(tax, price) {
        const taxAccount = parseFloat(tax) / 100;
        const originalUnitValue = parseFloat(price);
        const taxedUnit = originalUnitValue + (originalUnitValue * taxAccount);
        return taxedUnit.toFixed(2);
    }

    function sendAlert() {
        setAlert(!alert)
    }

    return (
        <tr>
            <td>#{code}</td>
            <td>{name}</td>
            <td onMouseEnter={sendAlert} onMouseOut={sendAlert} className={styles.amount} style={amount <= 10 ? { color: "red" } : { color: "white" }}>
                {amount}
                {
                    alert &&
                    <div className={styles.alert}>
                        <span>Quantidade muito baixa</span>
                    </div>
                }
            </td>
            <td>R${price}</td>
            <td>{productTaxed(tax, price)}</td>
            <td>{category} (Tax: {tax}%)</td>
            <td>
                <div className={styles.buttons}>
                    <button><Icon iconPath={"ph ph-trash"} /></button>
                    <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                </div>
            </td>
        </tr >
    )
}

export default LineTable