import React, { useState } from 'react';
import { fetchProducts } from '../api/ProductService';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    companyName: 'AMZ',
    categoryName: 'Laptop',
    top: 10,
    minPrice: 1,
    maxPrice: 10000
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { companyName, categoryName, top, minPrice, maxPrice } = filters;
    const fetchedProducts = await fetchProducts(companyName, categoryName, top, minPrice, maxPrice);
    setProducts(fetchedProducts);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="companyName" value={filters.companyName} onChange={handleFilterChange} placeholder="Company Name" />
        <input name="categoryName" value={filters.categoryName} onChange={handleFilterChange} placeholder="Category Name" />
        <input type="number" name="top" value={filters.top} onChange={handleFilterChange} placeholder="Top N Products" />
        <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min Price" />
        <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max Price" />
        <button type="submit">Fetch Products</button>
      </form>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
