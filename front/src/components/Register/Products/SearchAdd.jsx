import React from 'react'
import styles from "./Products.module.css"

function SearchAdd() {
    return (
        <div className={styles.search}>
            <input type="text" placeholder='Pesquisar Produto' />
            <button>
                pesquisar
            </button>
            <button className='btn-blue'>
                <span>
                    + Adicionar produto
                </span>
            </button>
        </div>
    )
}


export default SearchAdd