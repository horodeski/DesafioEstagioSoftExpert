import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changesTax, changesTotal, changesTotalFinal, decrementAmount, deleteAll, incrementAmount, removeItem } from '../../../redux/Cart/actions'
import { OrdersApi, ProductsApi } from '../../../services'
import { Card, Header, NoItem, Reckoning, Loader } from './'
import { toast } from 'react-toastify'
import styles from "./Cart.module.css"

function Cart() {
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(false)
    const { products, totalCart, tax, totalFinal } = useSelector(state => state.CartReducer)
    let copyProducts = products
    const [vProducts, setV] = useState(copyProducts)
    const [allProducts, setAllProducts] = useState([]);

    async function getProducts() {
        const data = await ProductsApi.getProducts();
        setAllProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);


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

    useEffect(() => {
        finalCart()
    }, [products])

    async function putProduct(data) {
        await ProductsApi.updateProducts(data);
    }

    function updateStock(code, amount) {
        console.log(code, amount)
        const findProduct = allProducts.find((i) => i.code == code)
        const calc = findProduct.amount - amount
        console.log(calc)
        if (calc > 1 && calc <= findProduct.amount) {
            const data = {
                code: code,
                amount: calc
            }
            const f_data = objectToFormData(data)
            putProduct(f_data)

            return true
        } else {
            toast.error("Quantidade indisponivel")
            return false
        }
    }

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
        dispatch(changesTotalFinal(calc))
        return calc
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
            total: totalFinal,
        }

        const orderFormData = objectToFormData(order)
        await OrdersApi.postOrder(orderFormData);

        const finishAnimated = () => {
            setLoader(true)

            setTimeout(() => {
                setLoader(false)
                toast.success("Compra realizada!")
                deleteCart()
            }, 2000)
        }

        products.forEach(async (i) => {
            const order_item = {
                order_code: order.code,
                product_code: i.code,
                amount: i.amount,
                price: i.price,
                product: i.name,
                tax: i.taxPercent
            }
            let checkStock = updateStock(i.code, i.amount)

            if (checkStock) {
                const orderItemFormData = objectToFormData(order_item)
                await OrdersApi.postOrderItem(orderItemFormData)
                finishAnimated()
            }
        })
    }

    async function increment(code) {
        dispatch(incrementAmount(code))
    }

    async function decrement(code) {
        dispatch(decrementAmount(code))
    }

    useEffect(() => {
        setV(products)
    }, [products])

    function deleteCart() {
        dispatch(deleteAll(products.length))
    }

    function itemsLength() {
        return vProducts.length == 0
    }

    useEffect(() => {
        itemsLength()
    }, [vProducts])

    return (
        <div className={styles.background}>
            <div className={styles.modal} style={itemsLength() ? { justifyContent: "flex-start", gap: "5vh" } : { justifyContent: "space-between" }}>
                <Header />
                <div className={styles.body}>
                    {
                        itemsLength()
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
                                                increment={increment}
                                                decrement={decrement}
                                                priceAmount={i.priceAmount}
                                                name={i.name}
                                                amount={i.amount}
                                                price={i.price}
                                            />
                                        ))
                                    }
                                </div>
                                <Reckoning tax={tax} valorFinal={totalFinal} totalValue={totalCart} buy={finishCart} deleteCart={deleteCart} />
                            </>
                    }
                    <Loader loader={loader} />
                </div>
            </div>
        </div>
    )
}

export default Cart