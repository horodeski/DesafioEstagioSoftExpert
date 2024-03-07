import React, { useState } from 'react'
import { Card } from '..'
import { Icon } from "../../common"
import "../../../assets/styles/App.css"
import styles from "../Dashboard.module.css"
import Modal from './Modal'

function LatestProducts() {
    const [modal, setModal] = useState(false)
    
    function stateModal() {
        setModal(!modal)
    }
    
    return (
        <div className={styles.searchAll}>
            <div className={styles.search}>
                <h2>Produtos recentes
                    <span>
                        (10 últimos)
                    </span>
                </h2>
                <div className={styles.inputButton}>
                    <input placeholder='Pesquise por nome do produto...' />
                    <button className='btn-gray'>Pesquisar</button>
                </div>
                <div className={styles.allCards}>
                    <Card onClick={stateModal}/>
                </div>
               {
                modal &&
                <Modal closeModal={stateModal}/>
               }
            </div>
        </div>
    )
}


export default LatestProducts