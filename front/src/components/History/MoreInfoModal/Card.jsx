import styles from "../history.module.css"
function Card({ price, name, amount, priceAmount, code, deleteItem, increment }) {
  return (
    <div className={styles.card}>
      <h3>
        {name}
      </h3>
      <span className={styles.unitPrice}>R${price}/Item</span>
    </div>
  )
}

export default Card