import { useEffect, useState } from "react";
import { ProductsApi } from "../../../../services";
import CardProduct from "../../CardProduct";
import { Empty } from "../../../Common";
import styles from "./Descontos.module.css";

function Descontos() {
  const [allProducts, setAllProducts] = useState([]);
  const [lessPrice, setLessPrice] = useState([])
  const [amount, setAmount] = useState(1);

  const getProducts = async () => {
    const data = await ProductsApi.getProducts();
    setAllProducts(data);
    const productsLessPrice = allProducts.filter((product) => product.price < 15)
    setLessPrice(productsLessPrice)
  }

  useEffect(() => {
    getProducts()

  }, [])

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
      <h3>Ultimos no estoque</h3>
      <div className={styles.allProducts}>
        {
          lessPrice.length > 1 ?

            lessPrice.map((product) => (
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
            ))
            :
            <Empty text={"Estoque cheio"} />
        }
      </div>
    </section>
  );
}

export default Descontos;
