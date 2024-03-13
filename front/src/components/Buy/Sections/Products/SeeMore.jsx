import React from 'react'
import Icon from '../../../Common/Icon'

import styles from "./Products.module.css"

function SeeMore({ seeMore, seeMoreState }) {
    return (
        <div onClick={seeMore} style={seeMoreState ? { bottom: "-8vh", background: "transparent" } : { bottom: "0vh" }} className={styles.seeMore}>
            {
                seeMoreState ?
                    <>
                        <span>Retrair</span>
                        <div style={seeMoreState ? { rotate: "180deg" } : { rotate: "0deg" }}>
                            <Icon iconPath={"ph-fill ph-caret-down"} />
                        </div>
                    </>
                    :
                    <>
                        <span>Expadir mais items</span>
                        <Icon iconPath={"ph-fill ph-caret-down"} />
                    </>
            }
        </div>
    )
}

export default SeeMore