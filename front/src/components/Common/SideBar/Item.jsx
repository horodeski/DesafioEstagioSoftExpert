import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon'
import styles from "./SideBar.module.css"

function Item({path, name, icon}) {
    return (
        <li className={styles.liStyle}>
            <NavLink to={`/${path}`}>
                <Icon iconPath={icon} />
                <a>{name}</a>
            </NavLink>
        </li>)
}

export default Item