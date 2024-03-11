import React from 'react'
import styles from "./Categories.module.css"
import { setModalRegister } from '../../../redux/ui/actions'
import { useDispatch } from 'react-redux'


function SearchAdd({ searchValue, onSearchChange }) {
    const dispatch = useDispatch()

    function toggleModal() {
        dispatch(setModalRegister(true))
    }

    return (
        <div className={styles.search}>
            <input type="text" value={searchValue}
                onChange={(e) => onSearchChange(e.target.value)} placeholder='Pesquisar Categoria' />
            <button>
                pesquisar
            </button>
            <button className='btn-blue' onClick={toggleModal}>
                <span>
                    + Adicionar categoria
                </span>
            </button>
        </div>
    )
}


export default SearchAdd