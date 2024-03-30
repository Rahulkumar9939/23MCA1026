import axios from 'axios';


export const fetchProducts = async (companyName, categoryName, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(\`http://20.244.56.144/test/companies/\${companyName}/categories/\${categoryName}/products?top=\${top}&minPrice=\${minPrice}&maxPrice=\${maxPrice}\`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
};
