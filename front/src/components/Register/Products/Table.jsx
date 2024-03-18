import LineTable from './LineTable'
import styles from "./Products.module.css"

function Table({ products }) {
    return (
        <div className={styles.contentTable}>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Tax</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <LineTable name={product.name} key={product.code} code={product.code} category={product.category}
                                tax={product.tax}
                                amount={product.amount} price={product.price} />
                        ))
                    }
                </tbody>
            </table>
           
        </div>
    )
}


export default Table