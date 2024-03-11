import React from 'react';
import styles from "./Products.module.css";
import { useDispatch } from 'react-redux';
import { setModalRegister } from '../../../redux/ui/actions';

function SearchAddProducts({ searchValue, onSearchChange }) {
  const dispatch = useDispatch()
 
  function toggleModal() {
    dispatch(setModalRegister(true))
    console.log("s")
  }
 
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder='Pesquisar Produto'
      />
      <button onClick={toggleModal} className='btn-blue'>
        <span>
          + Adicionar produto
        </span>
      </button>
    </div>
  );
}

export default SearchAddProducts;
