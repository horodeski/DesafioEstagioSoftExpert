import React, { useCallback, useEffect } from 'react'
import { Icon } from '../../Common'
import styles from "./Categories.module.css"
import { CategoriesApi } from '../../../services'

function LineTable({ code, name, tax, category, productsData }) {

    const findProducts = useCallback(() => {
        const findCategory = productsData.filter(i => i.category == category.name)
        const teste = Object.keys(findCategory)
        return teste
    }, [category, productsData])

    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }

    // function deleteCategory(code) {
    //     const codeObj = {
    //         code: code
    //     }

    //     const codeFormData = objectToFormData(codeObj)
    //     CategoriesApi.deleteCategory(codeFormData)
    // }

    // useEffect(() => {
    //     deleteCategory()
    // })

    return (
        <tr>
            <td>#{code}</td>
            <td>{name}</td>
            <td>{tax}</td>
            <td>{findProducts()}</td>
            <td>
                <div className={styles.allButtons}>
                    <button>
                        <Icon iconPath={"ph ph-pencil-simple-line"} />
                    </button>
                    <button>
                        <Icon iconPath={"ph ph-trash"} />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default LineTable