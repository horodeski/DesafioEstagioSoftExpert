import { useState } from 'react';
import {  Link } from "react-router-dom";
import { optionsSideBar, dropdownOptions } from '../../../helpers/Mock';
import Item from './Item';
import Icon from '../Icon';
import styles from './SideBar.module.css';


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
                                <Link key={option.name} to={option.path}>{option.name}</Link>
                            ))}
                    </div>
                )
            }
        </div>
    )
}

function SideBar() {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.options}>
                <>
                    {
                        optionsSideBar.map((item) => (
                            <Item key={item.name} path={item.path} name={item.name} icon={item.icon} />
                        ))
                    }
                </>
                <>
                    {
                        dropdownOptions.map((dropdown) => (
                            <DropdownItem key={dropdown.name} description={dropdown.name} icon={dropdown.icon} options={dropdown.options} />
                        ))
                    }
                </>
            </ul>
        </nav >
    );
};

export default SideBar;
