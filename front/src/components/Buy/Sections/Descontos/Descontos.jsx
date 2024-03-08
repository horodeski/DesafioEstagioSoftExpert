import React from 'react'

import styles from "./Descontos.module.css"
import CardProduct from '../../CardProduct'
import Icon from '../../../Common/Icon'


function Descontos() {
  return (
    <section>
      <h3>Aproveite os descontos da semana</h3>
      <div className={styles.allProducts}>
        <div className={styles.search}>
          <input type="text" name="" id="" placeholder='Pesquise por nome...' />
          <button>Pesquisar</button>
        </div>
        <div className={styles.allProducts}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </section>
  )
}

export default Descontos