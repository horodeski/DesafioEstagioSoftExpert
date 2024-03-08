import React from 'react'

import styles from "./Categories.module.css"


function Categories() {
    return (
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
    )
}

export default Categories