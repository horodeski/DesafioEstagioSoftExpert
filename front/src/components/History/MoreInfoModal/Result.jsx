import styles from "../history.module.css"

function Item({ desc, value }) {

    return (
        <>
            <div className={styles.list}>
                <span>{desc}</span>
                <span>{value}</span>
            </div>

        </>
    )
}
function Result({ totalValue, tax }) {

    const allItems = [
        {
            desc: "Valor total",
            value: `R$${totalValue}`
        },
        {
            desc: "Tax",
            value: `+ R$${tax}`
        }
    ]

    return (
        <div className={styles.result}>
            {allItems.map((i) => (
                <Item key={i.desc} desc={i.desc} value={i.value} icon={i.icon} />
            ))}
        </div>
    )
}


export default Result