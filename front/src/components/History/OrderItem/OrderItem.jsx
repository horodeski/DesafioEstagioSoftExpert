import { Card, Header, NoItem, Reckoning } from '.'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { changesTax, changesTotal, removeItem } from '../../../redux/CartFavorite/actions'
import styles from "./Cart.module.css"
import { toast } from 'react-toastify'
import { OrdersApi } from '../../../services'

function Cart() {
    const [final, setFinal] = useState(0)
    const dispatch = useDispatch()
    const { products, totalCart, tax } = useSelector(state => state.FCReducer)
    let copyProducts = products
    const [vProducts, setV] = useState(copyProducts)
    const discount = 4

    const sumPrices = () => {
        const allPrices = vProducts.map(i => i.priceAmount)
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

    console.log(products)

    const sumTax = () => {
        const allPrices = vProducts.map(i => i.priceDifference * i.amount)
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
        const calc = (parseFloat(tax) + parseFloat(prices)).toFixed(2)
        console.log(calc)
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

    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }

    const finishCart = async () => {
        toast.success("Produto adicionado ao carrinho")
        const order_code = Math.random().toString(16).slice(2)
        const allAmount = vProducts.map(i => i.amount)
        const sum = allAmount.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        )


        const order = {
            code: order_code,
            tax: tax,
            total: totalCart,
        }
        products.map(async (i) => {
            const order_item = {
                code: Math.random().toString(16).slice(2),
                order_code: order_code,
                product_code: i.code,
                amount: i.amount,
                price: i.price,
                tax: i.tax
            }
            const orderItemFormData = objectToFormData(order_item)
            await OrdersApi.postOrderItem(orderItemFormData)
        })

        const orderFormData = objectToFormData(order)
        await OrdersApi.postOrder(orderFormData);

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
                    <Reckoning discount={discount} tax={tax} valorFinal={final} totalValue={totalCart} buy={finishCart} />
                </div>
            </div>
        </div>
    )
}

export default Cart