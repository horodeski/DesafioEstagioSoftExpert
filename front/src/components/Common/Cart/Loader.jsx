import React from 'react'
import styles from "./Cart.module.css"

export default function Loader({loader}) {
    return (
        <>
            {
                loader &&
                <div className={styles.background}>
                    <div className={styles.modalLoader}>
                        <div className={styles.loader}></div>
                        <span>Confimando pagamento</span>
                    </div>
                </div>
            }
        </>
    )
}
