import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changesTax, changesTotal, deleteAll, removeItem } from '../../../redux/CartFavorite/actions'
import { OrdersApi } from '../../../services'
import { Card, Header, NoItem, Reckoning, Loader } from './'
import { toast } from 'react-toastify'
import styles from "./Cart.module.css"

function Cart() {
    const [final, setFinal] = useState(0)
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const { products, totalCart, tax } = useSelector(state => state.FCReducer)
    let copyProducts = products
    const [vProducts, setV] = useState(copyProducts)

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
        const order = {
            code: Math.floor(Math.random() * 898) + 101,
            tax: tax,
            total: totalCart,

        }

        const orderFormData = objectToFormData(order)
        await OrdersApi.postOrder(orderFormData);

        products.forEach(async (i) => {
            const order_item = {
                order_code: order.code,
                product_code: i.code,
                amount: i.amount,
                price: i.price,
                tax: i.taxPercent
            }
            const orderItemFormData = objectToFormData(order_item)
            await OrdersApi.postOrderItem(orderItemFormData)
        })


        setLoader(true)

        setTimeout(() => {
            setLoader(false)
            toast.success("Compra realizada!")
            deleteCart()
        }, 2000)

    }

    function deleteCart() {
        dispatch(deleteAll(products.length))
    }

    function verify() {
        return vProducts.length == 0
    }


    useEffect(() => {
        verify()
    }, [vProducts])

    return (
        <div className={styles.background}>
            <div className={styles.modal} style={verify() ? {justifyContent: "flex-start", gap: "5vh"} : {justifyContent: "space-between"}}>
                <Header />
                <div className={styles.body}>
                    {
                        verify()
                            ?
                            <NoItem /> :
                            <>
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
                                <Reckoning tax={tax} valorFinal={final} totalValue={totalCart} buy={finishCart} deleteCart={deleteCart} />
                            </>
                    }
                    <Loader loader={loader}/>
                </div>
            </div>
        </div>
    )
}

export default Cart