import styles from "./Cart.module.css"

function Loader({loader}) {
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

export default Loader