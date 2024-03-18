import Header from './Header'
import Card from './Card'
import styles from "../history.module.css"

function MoreInfoModal({ allProducts }) {
    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <Header />
                <div className={styles.contentModal}>
                    {
                        allProducts.map((i) => (
                            <Card amount={i.amount} code={i.code} name={i.product} key={i.code} price={i.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MoreInfoModal