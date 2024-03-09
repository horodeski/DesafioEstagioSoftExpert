import React from 'react'
import LineTable from './LineTable'
import ModalCategory from './ModalCategory'
import styles from "./Categories.module.css"
import { useSelector } from 'react-redux'

function Table({ categories, categoriesData, productsData }) {
    const {isOpenModalRegister} = useSelector(state => state.uiReducer)
    
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
            {
                isOpenModalRegister &&
                <ModalCategory />
            }
        </div>
    )
}


export default Table