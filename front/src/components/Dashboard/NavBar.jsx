import React, { useState } from 'react'
import styles from "./Dashboard.module.css"

export default function NavBar({setSection, section}) {

    return (
        <nav className={styles.mainNav}>
            <ul>
                <li style={section == "products" ? { borderBottom: "2px solid var(--c-gray-100)" } : { border: "none" }}>
                    <a style={section == "products" ?  {color: "#fff"} : {color: "#bdbbb7"}} onClick={() => setSection("products")}>Produtos</a>
                </li>
                <li style={section == "categories" ? { borderBottom: "2px solid var(--c-gray-100)" } : { border: "none" }} onClick={() => setSection("categories")}>
                    <a style={section == "categories" ?  {color: "#fff"} : {color: "#bdbbb7"}}>Categorias</a>
                </li>
            </ul>
        </nav>
    )
}
