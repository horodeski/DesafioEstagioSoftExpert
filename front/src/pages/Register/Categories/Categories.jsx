import { useEffect, useState } from 'react'
import { AddCategories, TableCategories } from '../../../components/Register'
import { CategoriesApi, ProductsApi } from '../../../services'
import { Empty } from '../../../components/Common'
import { useSelector } from 'react-redux'
import ModalCategory from '../../../components/Register/Categories/ModalCategory'


function Categories() {
  const [categoriesData, setCategoriesData] = useState([])
  const [productsData, setProductsData] = useState([])

  const { isOpenModalRegister } = useSelector(state => state.uiReducer)

  const getCategories = async () => {
    const data = await CategoriesApi.getCategories();
    setCategoriesData(data);
  };

  const getProducts = async () => {
    const data = await ProductsApi.getProducts();
    setProductsData(data);
  };

  useEffect(() => {
    getProducts()
  }, [productsData]);

  useEffect(() => {
    getCategories();
  }, [categoriesData])

  return (
    <>
      <AddCategories />
      {
        categoriesData.length >= 1 ?
          <TableCategories productsData={productsData} categories={categoriesData} />
          :
          <Empty text={"Não há categorias registradas em nosso sistema"} />
      }
      {
        isOpenModalRegister &&
        <ModalCategory />
      }
    </>
  )
}

export default Categories