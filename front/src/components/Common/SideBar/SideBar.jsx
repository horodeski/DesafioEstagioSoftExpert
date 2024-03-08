import React, { useState } from 'react';
import styles from './SideBar.module.css';
import { useLocation, Link } from "react-router-dom";
import Item from './Item';
import { optionsSideBar, dropdownOptions } from '../../../helpers/Mock';
import Icon from '../Icon';


function DropdownItem({ description, options, icon }) {
    const [dropdownState, setDropdownState] = useState(false)
    return (
        <div>
            <li className={styles.liStyle} onClick={() => setDropdownState(!dropdownState)}>
                <Icon iconPath={icon} />
                <span >{description}</span>
            </li>
            {
                dropdownState && (
                    <div className={styles.dropdown}>
                        {
                        options.map((option) => (
                            <Link key={option} to={option.path}>{option.name}</Link>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

function SideBar() {
    const pathname = useLocation().pathname
    console.log(pathname)

    return (
        <nav className={styles.sidebar}>
            <ul className={styles.options}>
                {
                    optionsSideBar.map((item) => (
                        <>
                            <Item key={item.name} path={item.path} name={item.name} icon={item.icon} />
                        </>
                    ))
                }
                {
                    dropdownOptions.map((dropdown) => (
                        <DropdownItem key={dropdown} description={dropdown.name} icon={dropdown.icon} options={dropdown.options} />
                    ))
                }
            </ul>
        </nav >
    );
};

export default SideBar;
