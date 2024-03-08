import React, { useEffect } from 'react'
import { Icon } from '../../Common'
import styles from "./Categories.module.css"

function LineTable({ code, name, tax, category, categoriesData, productsData }) {
    
    function findProducts() {
        const findCategory = productsData.filter(i => i.category == category.name)
        const teste = Object.keys(findCategory)
        return teste
    }

    useEffect(() => {
        findProducts()
    }, []);
    return (
        <tr>
            <td>#{code}</td>
            <td>{name}</td>
            <td>{tax}</td>
            <td>{findProducts()}</td>
            <td>
                <div className={styles.allButtons}>
                    <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                    <button><Icon iconPath={"ph ph-trash"} /></button>
                </div>
            </td>
        </tr>
    )
}

export default LineTable