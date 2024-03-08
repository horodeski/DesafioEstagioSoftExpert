import React from 'react'
import { useDispatch } from "redux"
import styles from "./Categories.module.css"
import { setModal } from '../../../redux/ui/actions'


function SearchAdd() {
    const dispatch = useDispatch()
    return (
        <div className={styles.search}>
            <input type="text" placeholder='Pesquisar Categoria' />
            <button>
                pesquisar
            </button>
            <button className='btn-blue' onClick={dispatch(setModal(true))}>
                <span>
                    + Adicionar categoria
                </span>
            </button>
        </div>
    )
}


export default SearchAdd