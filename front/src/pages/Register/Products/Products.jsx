import { useEffect, useState } from 'react';
import { AddProducts, TableProducts } from '../../../components/Register';
import { ProductsApi } from '../../../services';
import { Empty } from '../../../components/Common';
import ModalProduct from '../../../components/Register/Products/ModalProduct';
import { useSelector } from 'react-redux';

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  const { isOpenModalRegister } = useSelector(state => state.uiReducer)

  async function getProducts() {
    const data = await ProductsApi.getProducts();
    setAllProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [allProducts]);

  return (
    <>
      <AddProducts />
      {
        allProducts.length >= 1 ?
          <TableProducts products={allProducts} />

          :
          <Empty text={"Não há produtos registrados em nosso sistema"} />
      }
      {
        isOpenModalRegister &&
        <ModalProduct />
      }
    </>
  );
}
