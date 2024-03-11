import React, { useEffect } from 'react'
import { Icon } from '../../Common'
import styles from "./Products.module.css"
import { useState } from 'react';

function LineTable({ name, code, price, category, tax, amount }) {
    const [alert, setAlert] = useState(false)
    function productTaxed(tax, price) {
        const taxAccount = parseFloat(tax) / 100;
        const originalUnitValue = parseFloat(price);
        const taxedUnit = originalUnitValue + (originalUnitValue * taxAccount);
        return taxedUnit.toFixed(2);
    }

    function alertStock () {
        if (amount <= 10) {
            setAlert(true)
        }
    }
    useEffect(() => {
        alertStock
    }, [])

    return (
        <tr>
            <td>{code}</td>
            <td>{name}</td>
            <td style={amount <= 10 ? { color: "red" } : { color: "white" }}>{amount}</td>
            {
                alert &&
                <div className={styles.alert}>
                    <span>Quantidade muito baixa</span>
                </div>
            }
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