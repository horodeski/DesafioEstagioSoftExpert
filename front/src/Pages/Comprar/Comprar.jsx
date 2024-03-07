import React from 'react'

import styles from "./Comprar.module.css"
import { CardProduct } from '../../components/Buy';

function Comprar() {
    return (
        <div>
            <div className={styles.header}></div>
            <div className={styles.container}>
                <section>
                    <h3>
                        Aproveite os descontos da semana
                    </h3>
                    <div className={styles.allProducts}>
                        <div>
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
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
                            <CardProduct />
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
                <section>
                    <h3>
                        Navegue por categorias
                    </h3>
                    <div className={styles.allCategories}>
                        <div className={styles.categoryCard}>
                            Toys
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Compras anteriores</h3>
                    <div className={styles.allProducts}>
                        <div className={styles.productCard}></div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Comprar;