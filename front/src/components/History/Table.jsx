import LineTable from "./LineTable"
import styles from "./history.module.css"

function Table({ orders, toggleModal }) {
    return (
        <table className={styles.table}>
            <thead>
                <th>Code</th>
                <th>Tax</th>
                <th>Total</th>
            </thead>
            <tbody>
                {orders.map((item) => (
                    <LineTable key={item.code} code={item.code} tax={item.tax} toggleModal={toggleModal(item.code)}  total={item.total} />
                ))}
            </tbody>
        </table>
    )
}

export default Table