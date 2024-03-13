import React from 'react'
import CardProduct from '../../CardProduct'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../../redux/CartFavorite/actions'

function ProductsContent({ filteredProducts, amount, setAmount, allProducts }) {
    const dispatch = useDispatch()

    function increment() {
        setAmount(amount + 1)
    }

    function decrement() {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }

    const addToCartTeste = (code) => {
        toast.success("Produto adicionado ao carrinho")
        const findProducts = allProducts.find(i => i.code == code)
        const priceAmount = amount * findProducts.price

        function CalcTaxPercent() {
            const price = parseInt(findProducts.price)
            const tax = parseInt(findProducts.tax)
            const priceTaxed = (price + price * (tax / 100))
            return parseFloat(priceTaxed).toFixed(2)
        }


        const product = {
            name: findProducts.name,
            code: code,
            amount: amount,
            price: parseInt(findProducts.price),
            priceAmount: priceAmount,
            priceTaxed: CalcTaxPercent(),
            taxPercent: parseInt(findProducts.tax)
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
                        amount={amount}
                        description={product.description}
                        category={product.category}
                        increment={increment}
                        decrement={decrement}
                        name={product.name}
                        toggleCart={() => addToCartTeste(product.code)}
                    />
                ))
            }
        </>
    )
}

export default ProductsContent