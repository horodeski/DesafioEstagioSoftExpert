import Header from './Header'
import Card from './Card'
import styles from "../history.module.css"
import Result from './Result'

function MoreInfoModal({ allProducts, totalValue, tax }) {
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
                <Result totalValue={totalValue} tax={tax}/>
            </div>
        </div>
    )
}

export default MoreInfoModal