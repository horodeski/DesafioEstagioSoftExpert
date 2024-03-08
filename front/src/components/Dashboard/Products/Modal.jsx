import React, { useState } from 'react'
import Card from './CardProduct'
import styles from "../Dashboard.module.css"
import { Icon } from '../../Common'

function Modal({ closeModal }) {
  const [active, setActive] = useState("products")

  return (
    <div onClick={closeModal} className={styles.background}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <span>
              Products
            </span>
            <span>/</span>
            <span>Bola</span>
          </div>
          <button onClick={closeModal}>
            <Icon iconPath={"ph ph-x"} />
          </button>
        </div>
        <div className={styles.contentModal}>
          <div className={styles.moreInfo}>
            <h3>Bola</h3>
            <ul>
              <li>
                <div>
                  <span>Status:</span>
                </div>
                <div className={styles.state}>
                  <div className={styles.dot}></div>
                  <a>Disponivel</a>
                </div>
              </li>
              <li>
                {/* Isso só aparece se estiver Disponivel */}
                <div>
                  <span>Quantidae:</span>
                </div>
                <a>41 Unidades</a>
              </li>
              <li>
                <div>
                  <span>Category:</span>
                </div>
                <a>Toys</a>
              </li>
            </ul>
          </div>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est alias vel soluta ducimus praesentium molestias impedit, aut fugit. Ipsam veritatis soluta officia modi similique odio nisi esse mollitia ratione sit.</p>
          </div>
          <div>
            <div className={styles.tabs}>
              <ul>
                <li id={active == "products" ? styles.active : ""} onClick={() => setActive("products")}>Produtos Relacionado</li>
                {/* Pegar aleatoriso */}
                <li id={active == "categories" ? styles.active : ""} onClick={() => setActive("categories")}>Talvez você goste</li>
              </ul>
            </div>
            {/* Filtrar por categoria */}
            <div className={styles.productsRelacionados}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Modal
