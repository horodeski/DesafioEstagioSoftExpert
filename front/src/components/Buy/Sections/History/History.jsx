import React, { useEffect, useState } from 'react'
import styles from "./History.module.css"
import { OrdersApi, ProductsApi } from '../../../../services';

export default function History() {
    const [allProducts, setAllProducts] = useState([]);
    const [orderItems, setOrderItems] = useState([])
    const [findProducts, setFindProducts] = useState([])

    async function getProducts() {
        const data = await ProductsApi.getProducts();
        setAllProducts(data);
    }

    async function getOrderItem() {
        const data = await OrdersApi.getOrderItem();
        setOrderItems(data);
    }

    // function aaaa() {
    //     orderItems.forEach((i) => {
    //         const buyProducts = allProducts.filter(bla => bla.code == i.product_code)
    //         setFindProducts(buyProducts)
    //     })
    // }



    useEffect(() => {
        // aaaa() 
    }, [orderItems])

    useEffect(() => {
        getProducts()
        getOrderItem();
    }, []);

    return (
        <section>
            <h3>Compras anteriores</h3>
            <div className={styles.allProducts}>
                <div className={styles.productCard}>
                    {
                        findProducts.map((i) => (
                            <span key={i.code}>{i.name}</span>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
