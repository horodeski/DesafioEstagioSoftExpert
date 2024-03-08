import React, { useEffect, useState } from 'react'
import { SearchAddCategories, TableCategories } from '../../../components/Register'
import { CategoriesApi, ProductsApi } from '../../../services'


function Categories() {
  const [categoriesData, setCategoriesData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [productCategory, setProductCategory] = useState(0)


  const getCategories = async () => {
    const data = await CategoriesApi.getCategories();
    setCategoriesData(data);
  };

  const getProducts = async () => {
    const data = await ProductsApi.getProducts();
    setProductsData(data);
  };
  
  useEffect(() => {
    getCategories();
    getProducts()
  }, []);

  return (
    <>
      <SearchAddCategories />
      <TableCategories categoriesData={categoriesData} productsData={productsData} productCategory={productCategory} categories={categoriesData} />
    </>
  )
}

export default Categories