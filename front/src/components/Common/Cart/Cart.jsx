import { Card, Header, NoItem, Reckoning } from './'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changesTax, changesTotal, removeItem } from '../../../redux/CartFavorite/actions'
import styles from "./Cart.module.css"

function Cart() {
    const dispatch = useDispatch()

    const { products, totalCart, tax } = useSelector(state => state.FCReducer)

    let copyProducts = products
    // const [tax, setTax] = useState(0)
    const [vProducts, setV] = useState(copyProducts)
    const [valorFinal, setValorFinal] = useState(0)
    const discount = 4

    const sumPrices = async () => {
        const allPrices = vProducts.map(i => i.price)
        const sum = allPrices.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
        dispatch(changesTotal(sum))
    }

    useEffect(() => {
        sumPrices()
        sumTax()
    }, [vProducts])

    // useEffect(() => {

    // }, [])

    const sumTax = () => {
        const allTax = vProducts.map(i => i.taxAddprice)
        console.log(vProducts.map(i => i))
        vProducts.forEach((i) =>{
            let sla = 0
            let tax = i.taxPercent
            console.log(sla =+ tax)

        })
        const sum = allTax.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
        dispatch(changesTax(sum))
    }

    const deleteItem = async (code) => {
        dispatch(removeItem(code))
        var index = vProducts.filter((item) => item.code != code)
        setV(index)
        sumPrices()
        sumTax()
    }

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <Header />
                <div className={styles.body}>
                    {
                        vProducts.length == 0 ?
                            <NoItem /> :
                            <div className={styles.allProducts}>
                                {
                                    vProducts.map((i) => (
                                        <Card
                                            key={i.code}
                                            code={i.code}
                                            deleteItem={() => deleteItem(i.code)}
                                            priceAmount={i.priceAmount}
                                            name={i.name}
                                            amount={i.amount}
                                            price={i.price}
                                        />
                                    ))
                                }
                            </div>
                    }

                    <Reckoning discount={discount} tax={tax} valorFinal={totalCart} totalValue={totalCart} />
                </div>
            </div>
        </div>
    )
}

export default Cart