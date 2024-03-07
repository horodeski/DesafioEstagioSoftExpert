import React, { useState } from 'react';
import styles from './SideBar.module.css';
import Icon from '../Icon';
import { Link, NavLink, useLocation } from "react-router-dom";
import { Categories } from '../../../Pages';
import Item from './Item';
import { optionsSideBar } from '../../../helpers/Mock';


const SideBar = () => {
    const [reporting, setReporting] = useState(false)
    const pathname = useLocation().pathname
    console.log(pathname)

    return (
        <nav className={styles.sidebar}>
            <ul className={styles.options}>
                {
                    optionsSideBar.map((item) => (
                        <>
                            <Item key={item.name} path={item.path} name={item.name} icon={item.icon} />
                            {
                                reporting &&
                                <div style={reporting ? { display: "flex" } : { display: "none", height: 0 }} className={styles.moreOptions}>
                                    <a>Produtos</a>
                                    <Link to="/categories">Categorias</Link>
                                </div>
                            }
                        </>
                    ))
                }
            </ul>
        </nav >
    );
};

export default SideBar;
