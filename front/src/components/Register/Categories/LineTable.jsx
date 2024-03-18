import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '../../Common'
import styles from "./Categories.module.css"
import { CategoriesApi } from '../../../services'
import { toast } from 'react-toastify'

function LineTable({ code, name, tax, category, productsData }) {
    const [categoryProduct, setProductCategory] = useState(0)

    const findProducts = () => {
        const findCategory = productsData.filter(i => i.category == category.name)
        const obj = Object.keys(findCategory)
        setProductCategory(obj.length)
    }

    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }

    async function deleteCategory(code) {
        const codeFormData = objectToFormData(code)
        await CategoriesApi.deleteCategory(codeFormData)
        toast.success("Categoria removida do sistema")
    }

    useEffect(() => {
        findProducts()
    }, [])

    return (
        <tr>
            <td>#{code}</td>
            <td>{name}</td>
            <td>{tax}</td>
            <td>{categoryProduct}</td>
            <td>
                <div className={styles.allButtons}>
                    <button onClick={() => deleteCategory({ code })}>
                        <Icon iconPath={"ph ph-trash"} />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default LineTable