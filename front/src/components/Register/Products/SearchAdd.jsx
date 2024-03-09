import React from 'react';
import styles from "./Products.module.css";

function SearchAddProducts({ searchValue, onSearchChange }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder='Pesquisar Produto'
      />
      <button className='btn-blue'>
        <span>
          + Adicionar produto
        </span>
      </button>
    </div>
  );
}

export default SearchAddProducts;
