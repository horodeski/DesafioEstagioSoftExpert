import React from 'react'
import styles from "./Categories.module.css"
import { Icon } from '../../Common'
import categories from '../../../services/categories'
import LineTable from './LineTable'
import ModalCategory from './ModalCategory'

function Table({ categories, categoriesData, productsData }) {
    return (
        <div className={styles.contentTable}>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Tax</th>
                        <th>Produtos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category) => (
                            <LineTable key={category} category={category} categoriesData={categoriesData} productsData={productsData} code={category.code} name={category.name} tax={category.tax} />
                        ))
                    }
                </tbody>
            </table>
            <ModalCategory />
        </div>
    )
}


export default Table