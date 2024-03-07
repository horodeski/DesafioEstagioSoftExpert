import React, { useState } from 'react'
import { LackingProducts, LatestProducts, NavBar, LatestCategories, LessTax, MoreTax } from '../../components/Dashboard';
import styles from "./Dashboard.module.css"
import '../../assets/styles/App.css'


function Dashboard() {
  const [section, setSection] = useState("products")
  return (
    <>
      <div className='content'>
        <NavBar section={section} setSection={setSection} />
        <div className={styles.container}>
          {
            section == "products" ?
              <div className={styles.allSections}>
                <LatestProducts />
                <LackingProducts />
              </div>
              :
              <div className={styles.allSections}>
                <LatestCategories />
                <LessTax />
                <MoreTax />
              </div>
          }
          <div className={styles.moreInfo}>
            <h2>
              Mais informações
            </h2>
            <div>
              <div className={styles.card}>
                {/* isso é uma tarefa para genivaldo perereira torrez */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;