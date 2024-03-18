import { NavLink } from 'react-router-dom'
import Icon from '../Icon'
import styles from "./SideBar.module.css"

function Item({path, name, icon}) {
    return (
        <li className={styles.liStyle}>
            <NavLink to={`/${path}`}>
                <Icon iconPath={icon} />
                <span>{name}</span>
            </NavLink>
        </li>)
}

export default Item