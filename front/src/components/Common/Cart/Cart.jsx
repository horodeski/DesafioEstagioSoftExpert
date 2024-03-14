import { Card, Header, NoItem, Reckoning } from './'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changesTax, changesTotal, removeItem } from '../../../redux/CartFavorite/actions'
import styles from "./Cart.module.css"

function Cart() {
    const [final, setFinal] = useState(0)
    const dispatch = useDispatch()
    const { products, totalCart, tax } = useSelector(state => state.FCReducer)
    let copyProducts = products
    const [vProducts, setV] = useState(copyProducts)
    const discount = 4

    const sumPrices = () => {
        const allPrices = vProducts.map(i => i.price)
        const sum = allPrices.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
        dispatch(changesTotal(sum))
        return sum
    }

    useEffect(() => {
        sumPrices()
        sumTax()
        finalCart()
    }, [vProducts])


    const sumTax = () => {
        const allPrices = vProducts.map(i => i.priceDifference)
        const sum = allPrices.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )
        const finalSum = sum.toFixed(2)
        dispatch(changesTax(finalSum))
        return finalSum
    }

    function finalCart() {
        const tax = sumTax()
        const prices = sumPrices()
        const calc = parseInt(tax) + parseInt(prices)
        setFinal(calc)
    }

    const deleteItem = async (code) => {
        dispatch(removeItem(code))
        var index = vProducts.filter((item) => item.code != code)
        setV(index)
        sumPrices()
        finalCart()
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
                    <Reckoning discount={discount} tax={tax} valorFinal={final} totalValue={totalCart} />
                </div>
            </div>
        </div>
    )
}

export default Cart