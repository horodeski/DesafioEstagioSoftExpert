import React, { useEffect, useState } from 'react';
import { SearchAddProducts, TableProducts } from '../../../components/Register';
import { ProductsApi } from '../../../services';

export default function Products() {
  const [searchValue, setSearchValue] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  async function getProducts() {
    const data = await ProductsApi.getProducts();
    setAllProducts(data);
    setFilteredProducts(data);
  }
  const handleSearchChange = (newValue) => {
    setSearchValue(newValue);
    
    const filtered = allProducts.filter((product) =>
    product.name.toLowerCase().includes(newValue.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <SearchAddProducts searchValue={searchValue} onSearchChange={handleSearchChange} />
      <TableProducts products={filteredProducts} />
    </>
  );
}
