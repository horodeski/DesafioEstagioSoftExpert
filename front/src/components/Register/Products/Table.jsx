import React from 'react'
import styles from "./Products.module.css"
import { Icon } from '../../Common'

function Table() {
    return (
        <div className={styles.contentTable}>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th>Tax</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>#245</td>
                        <td>Bola</td>
                        <td>74</td>
                        <td>R$5.00</td>
                        <td>R$4.00</td>
                        <td>Brinquedos (Tax: 5%)</td>
                        <td>
                            <div className={styles.buttons}>
                                <button><Icon iconPath={"ph ph-trash"} /></button>
                                <button><Icon iconPath={"ph ph-pencil-simple-line"} /></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Table