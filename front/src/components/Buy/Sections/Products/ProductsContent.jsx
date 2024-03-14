import React, { useState } from 'react'
import CardProduct from '../../CardProduct'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../redux/CartFavorite/actions'

function ProductsContent({ filteredProducts, amount, setAmount, allProducts }) {
    const dispatch = useDispatch()

    const { products } = useSelector(state => state.FCReducer)


    function increment() {
        setAmount(amount + 1)
    }

    function decrement() {
        if (amount > 1) {
            setAmount(amount - 1)
        }
    }


    const addProdToCart = (code) => {
        toast.success("Produto adicionado ao carrinho")
        const findProducts = allProducts.find(i => i.code == code)
        const priceAmount = amount * findProducts.price
        const price = parseInt(findProducts.price)


        function CalcTaxPercent() {
            const tax = parseInt(findProducts.tax)
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
            amount: amount,
            price: parseInt(findProducts.price),
            priceAmount: priceAmount,
            priceTaxed: priceTaxed,
            priceDifference: priceDifference(),
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
                        toggleCart={() => addProdToCart(product.code)}
                    />
                ))
            }
        </>
    )
}

export default ProductsContent