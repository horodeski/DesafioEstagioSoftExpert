import React from 'react'
import styles from "./Products.module.css"
import { Icon } from '../../Common'
import LineTable from './LineTable'

function Table({ products }) {
    return (
        <div className={styles.contentTable}>
            <table>
                <thead>
                    <tr>
                        {/* <th>Code</th> */}
                        <th>Name</th>
                        {/* <th>Quantidade</th> */}
                        <th>Preço</th>
                        {/* <th>Tax</th> */}
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <LineTable title={product.title} key={product.id}  id={product.id} category={product.category} price={product.price} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Table