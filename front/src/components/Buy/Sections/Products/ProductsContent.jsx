import React, { useState } from 'react'
import CardProduct from '../../CardProduct'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../redux/CartFavorite/actions'
import { ProductsApi } from '../../../../services'

function ProductsContent({ filteredProducts, allProducts }) {
    const dispatch = useDispatch()

    function objectToFormData(obj) {
        const formData = new FormData();

        Object.entries(obj).forEach(([key, value]) => {
            formData.append(key, value);
        });

        return formData;
    }
    async function putProduct(data) {
        await ProductsApi.updateProducts(data);
    }


    async function updateStock(code) {
        const findProduct = allProducts.find(i => i.code == code)
        const calc = findProduct.amount - amount
        
        const data = {
            code: code,
            amount: calc
        }
        
        const f_data = objectToFormData(data)
        putProduct(f_data)
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
        updateStock(product.code)
        dispatch(addToCart(product))

    }

    return (
        <>
            {
                filteredProducts.map((product) => (
                    <CardProduct
                        key={product.code}
                        price={product.price}
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