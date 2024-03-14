import React, { useCallback, useEffect, useState } from "react";

import styles from "./Descontos.module.css";
import CardProduct from "../../CardProduct";
import Icon from "../../../Common/Icon";
import { ProductsApi } from "../../../../services";

function Descontos() {
  const [allProducts, setAllProducts] = useState([]);
  const [lessPrice, setLessPrice] = useState([]) 
  const [amount, setAmount] = useState(1);

  const getProducts = async () => {
    const data = await ProductsApi.getProducts();
    setAllProducts(data);
    const productsLessPrice = allProducts.filter((product) => product.price < 20)
    setLessPrice(productsLessPrice)
  };

  useEffect(() => {
    getProducts();
  }, []);


  function increment() {
    setAmount(amount + 1)
  }

  function decrement() {
    if (amount > 1) {
      setAmount(amount - 1)
    }
  }



  return (
    <section>
      <h3>Aproveite os descontos da semana</h3>
      <div className={styles.allProducts}>
        <div className={styles.search}>
          <input type="text" name="" id="" placeholder="Pesquise por nome..." />
          <button>Pesquisar</button>
        </div>
        <div className={styles.allProducts}>
          {lessPrice.map((product) => (
            <CardProduct
              key={product.code}
              price={product.price}
              amount={amount}
              description={product.description}
              category={product.category}
              increment={increment}
              decrement={decrement}
              name={product.name}

            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Descontos;
