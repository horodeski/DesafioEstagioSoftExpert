import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModalFavorite } from '../../../redux/ui/actions'
import Icon from '../Icon'
import styles from "./Favorite.module.css"
import { Card, Reckoning } from '.'

function Favorite() {

    const dispatch = useDispatch()
    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Seus  items favoritos</h2>
                    <button onClick={() => dispatch(setModalFavorite(false))}>
                        <Icon iconPath={"ph ph-x"} />
                    </button>
                </div>
                <div className={styles.body}>
                    <div className={styles.allProducts}>
                        <Card />
                    </div>
                    <Reckoning />
                </div>
            </div>
        </div>)
}

export default Favorite