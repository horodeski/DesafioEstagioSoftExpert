import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon'

function Item({path, name, icon}) {
    return (
        <li>
            <NavLink to={`/${path}`}>
                <Icon iconPath={icon} />
                <a>{name}</a>
            </NavLink>
        </li>)
}

export default Item