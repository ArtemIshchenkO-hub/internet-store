import { BASE_URL, ENDPOINTS, PRODUCTS_PER_PAGE } from './constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

// Task 1
export async function fetchCategories() {
  const { data } = await axios.get(ENDPOINTS.categories);
  return data;
}

// Task 2
export async function fetchProducts(currentPage) {
  const { data } = await axios.get(ENDPOINTS.products, {
    params: {
      limit: PRODUCTS_PER_PAGE,
      skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
    },
  });
  return data;
}
// Task 3
export async function fetchProductsByCategory(currentCategory) {
  const { data } = await axios.get(
    `${ENDPOINTS.productsByCategory}/${currentCategory}`
  );
  return data;
}

//Task 4

export async function fetchProductById(id) {
  const { data } = await axios.get(`${ENDPOINTS.products}/${id}`);
  return data;
}

//Task 5

export async function fetchProductByName(productName) {
  const { data } = await axios.get(ENDPOINTS.searchProduct, {
    params: {
      q: productName,
    },
  });

  return data;
}
