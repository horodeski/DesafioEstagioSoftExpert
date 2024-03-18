import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/Cart/actions'
import CardProduct from '../../CardProduct'
import { toast } from 'react-toastify'

function ProductsContent({ filteredProducts, allProducts }) {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)

    const addProdToCart = (code) => {
        toast.success("Produto adicionado ao carrinho")
        const findProducts = allProducts.find(i => i.code == code)
        const priceAmount = amount * findProducts.price
        const price = parseFloat(findProducts.price)

        function CalcTaxPercent() {
            const tax = parseFloat(findProducts.tax)
            const priceTaxed = (price + price * (tax / 100))
            const final = priceTaxed.toFixed(2)
            return parseFloat(final)
        }

        const priceTaxed = CalcTaxPercent()

        function priceDifference() {
            const calc = (priceTaxed - price).toFixed(2)
            return parseFloat(calc)
        }

        const product = {
            name: findProducts.name,
            code: code,
            amount: 1,
            price: parseFloat(findProducts.price),
            priceAmount: priceAmount,
            priceTaxed: priceTaxed,
            priceDifference: priceDifference(),
            taxPercent: parseFloat(findProducts.tax)
        }
        
        dispatch(addToCart(product))

    }

    return (
        <>
            {
                filteredProducts.map((product) => (
                    <CardProduct
                        key={product.code}
                        price={product.price}
                        code={product.code}
                        productAmount={product.amount}
                        description={product.description}
                        category={product.category}
                        name={product.name}
                        toggleCart={() => addProdToCart(product.code)}
                    />
                ))
            }
        </>
    )
}

export default ProductsContent