import { useEffect, useState } from 'react'
import { SearchAddCategories, TableCategories } from '../../../components/Register'
import { CategoriesApi, ProductsApi } from '../../../services'


function Categories() {
  const [searchValue, setSearchValue] = useState('');
  const [categoriesData, setCategoriesData] = useState([])
  const [productsData, setProductsData] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([]);

  const getCategories = async () => {
    const data = await CategoriesApi.getCategories();
    setCategoriesData(data);
    setFilteredCategories(data)
  };

  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
    
    const filtered = categoriesData.filter((category) =>
    category.name.toLowerCase().includes(newValue.toLowerCase())
    );
    
    setFilteredCategories(filtered);
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
      <SearchAddCategories searchValue={searchValue} onSearchChange={handleSearchChange}/>
      <TableCategories productsData={productsData} categories={filteredCategories} />
    </>
  )
}

export default Categories