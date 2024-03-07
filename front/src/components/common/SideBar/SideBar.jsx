import React, { useState } from 'react';
import styles from './SideBar.module.css';
import Icon from '../Icon';

const SideBar = () => {
    const [reporting, setReporting] = useState(false)
    const [active, setActive] = useState(true)
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.options}>
                <li>
                    <div style={active ? { marginLeft: "1vw" } : { marginLeft: "0" }}>
                        <Icon iconPath={"ph ph-chart-pie-slice"} />
                        <a>Dashboard</a>
                    </div>
                </li>

                <li>
                    <div >
                        <Icon iconPath={"ph ph-shopping-bag"} />
                        <a>Compras</a>
                    </div>
                </li>
                <li>
                    <div onClick={() => setReporting(!reporting)}>
                        <Icon iconPath={"ph ph-table"} />
                        <a>Relatórios</a>
                    </div>
                </li>
                <div style={reporting ? { display: "flex" } : { display: "none", height: 0 }} className={styles.moreOptions}>
                    <a>Produtos</a>
                    <a>Categorias</a>
                </div>
                <li>
                    <div>
                        <Icon iconPath={"ph ph-books"} />
                        <a>Histórico</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;
