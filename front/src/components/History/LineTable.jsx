function LineTable({ code, tax, total, toggleModal }) {
    return (
        <tr>
            <td>{code}</td>
            <td>{tax}</td>
            <td>{total}</td>
            <td><button onClick={() => toggleModal({code})}>Ver mais sobre a compra</button></td>
        </tr>
    )
}

export default LineTable