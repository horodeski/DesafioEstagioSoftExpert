import React from 'react'

import styles from "./Products.module.css"
import Icon from '../../../Common/Icon'
import CardProduct from '../../CardProduct'


function Products() {
  return (
    <section>
      <h3>Navegue por nossos produtos</h3>
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
          {/* isso só vai aparecer quando usuario nao estiver pesquisando */}
          <div className={styles.seeMore}>
            <span>Expadir mais items</span>
            <Icon iconPath={"ph-fill ph-caret-down"} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products