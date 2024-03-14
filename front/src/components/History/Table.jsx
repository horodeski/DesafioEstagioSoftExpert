import React from 'react'

import styles from "./history.module.css"

function LineTable({ code, tax, total, bla }) {
    return (
        <tr>
            <td>{code}</td>
            <td>{tax}</td>
            <td>{total}</td>
            <td><button onClick={() => bla({code})}>Ver mais sobre a compra</button></td>
        </tr>
    )
}

export default function Table({ orders, bla }) {

    return (
        <table className={styles.table}>
            <thead>
                <th>Code</th>
                <th>Tax</th>
                <th>Total</th>
            </thead>
            <tbody>
                {orders.map((item) => (
                    <LineTable key={item.code} code={item.code} tax={item.tax} bla={bla(item.code)}  total={item.total} />
                ))}
            </tbody>
        </table>
    )
}
