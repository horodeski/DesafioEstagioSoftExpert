import { useCallback, useEffect, useState } from "react";
import CardProduct from "../../CardProduct";
import { ProductsApi } from "../../../../services";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Products.module.css";
import { addToCart } from "../../../../redux/CartFavorite/actions";
import { toast } from "react-toastify";
import { ProductsContent, SeeMore } from "./";

function Products() {
  const [searchValue, setSearchValue] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [seeMoreState, setSeeMoreState] = useState(false);
  const [sectionMore, setSectionMore] = useState(true);
  const [initialProducts, setInitialProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [amount, setAmount] = useState(1);
  


  const getProducts = useCallback(async () => {
    const data = await ProductsApi.getProducts();
    setAllProducts(data);
    
    if (seeMoreState) {
      setInitialProducts(data.slice(6).reverse());
    } else {
      setInitialProducts(data.splice(6));
    }
  
    setFilteredProducts(data);
  
  }, [seeMoreState]);

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
    setSectionMore(false);
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(newValue.toLowerCase())
    );

    setFilteredProducts(filtered);
    setSectionMore(false);
  };

  function seeMore() {
    setSeeMoreState(!seeMoreState);
    getProducts();
  }
  
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section>
      <h3>Navegue por nossos produtos</h3>
      {allProducts.length == 0 ? (
        <>
          <span>não há produtos cadastrados em nosso sistema</span>
        </>
      ) : (
        <div className={styles.allProducts}>
          <div className={styles.search}>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              name=""
              id=""
              placeholder="Pesquise por nome..."
            />
            <button>Pesquisar</button>
          </div>
          <div
            className={styles.allProducts}
            style={
              seeMoreState ? { marginBottom: "8vh" } : { marginBottom: "5vh" }
            }
          >
            <ProductsContent
              amount={amount}
              setAmount={setAmount}
              allProducts={allProducts}
              filteredProducts={filteredProducts}
            />
            {sectionMore && (
              <SeeMore seeMore={seeMore} seeMoreState={seeMoreState}></SeeMore>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
