import React, { useCallback, useEffect, useState } from 'react'
import Icon from '../../../Common/Icon'
import CardProduct from '../../CardProduct'
import { ProductsApi } from '../../../../services'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Products.module.css"
import products from '../../../../services/products'
import { addToCart } from "../../../../redux/CartFavorite/actions"
import { toast } from 'react-toastify'

function Products() {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [seeMoreState, setSeeMoreState] = useState(false);
  const [sectionMore, setSectionMore] = useState(true);
  const [initialProducts, setInitialProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { cartItem } = useSelector(state => state.FCReducer)
  console.log(cartItem)
  const getProducts = useCallback(async () => {
    const data = await ProductsApi.getProducts();
    setAllProducts(data)
    if (seeMoreState) {
      setInitialProducts(data.slice(6).reverse());
    } else {
      setInitialProducts(data.splice(6));
    }
    setFilteredProducts(data);

  }, [seeMoreState])

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
    setSectionMore(false)
    console.log(newValue)
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(newValue.toLowerCase())
    );

    setFilteredProducts(filtered);
    setSectionMore(false)
  };

  const addToCartTeste = async (code) => {
    toast.success("Produto adicionado ao carrinho")
    const findProducts = allProducts.find(i => i.code == code)
    console.log(findProducts)
    const product = {
      name: findProducts.name,
      code: code,
      amount: findProducts.amount,
      price: findProducts.price
    }

    await dispatch(addToCart(product))

  }

  function seeMore() {
    setSeeMoreState(!seeMoreState)
    getProducts()
  }

  // useEffect(() => (
  //   addToCartTeste()

  // ), [addToCartTeste])

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <section>
      <h3>Navegue por nossos produtos</h3>
      {
        (allProducts.length == 0) ?
          <>
            <span>não há produtos cadastrados em nosso sistema</span>
          </>
          :
          <div className={styles.allProducts}>
            <div className={styles.search}>
              <input type="text" value={searchValue} onChange={(e) => handleSearchChange(e.target.value)} name="" id="" placeholder='Pesquise por nome...' />
              <button>Pesquisar</button>
            </div>
            <div className={styles.allProducts} style={seeMoreState ? { marginBottom: "8vh" } : { marginBottom: "5vh" }} >
              {
                filteredProducts.map((product) => (
                  <CardProduct key={product.code} price={product.price} amount={amount} setAmount={setAmount} description={product.description} category={product.category} name={product.name} toggleCart={e => addToCartTeste(product.code)} />
                ))
              }
              {
                sectionMore &&
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
              }
            </div>
          </div>
      }
    </section>
  )
}

export default Products