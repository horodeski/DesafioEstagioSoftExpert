import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModalCart } from '../../../redux/ui/actions'
import Icon from '../Icon'
import styles from "./Cart.module.css"
import { Card, Reckoning } from './'


function Cart() {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.FCReducer)
    console.log(cartItem)

    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Seu carrinho de compras</h2>
                    <button onClick={() => dispatch(setModalCart(false))}>
                        <Icon iconPath={"ph ph-x"} />
                    </button>
                </div>
                <div className={styles.body}>
                    <div className={styles.allProducts}>
                        {
                            cartItem.map((i) => (
                                <Card key={i.code} name={i.name} amount={i.amount} price={i.price} />
                            ))
                        }
                    </div>
                    <Reckoning />
                </div>
            </div>
        </div>)
}

export default Cart