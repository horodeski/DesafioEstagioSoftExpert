import React from 'react'
import PropTypes from 'prop-types';
import LineTable from './LineTable'
import ModalCategory from './ModalCategory'
import styles from "./Categories.module.css"
import { useSelector } from 'react-redux'

function Table({ categories, productsData }) {
    const { isOpenModalRegister } = useSelector(state => state.uiReducer)

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
                            <LineTable key={category.code} category={category} productsData={productsData}   code={category.code} name={category.name} tax={category.tax} />
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

Table.propTypes = {
    categories: PropTypes.array,
    productsData: PropTypes.array
}

export default Table