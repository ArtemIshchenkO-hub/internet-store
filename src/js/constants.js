export const BASE_URL = 'https://dummyjson.com';

export const ENDPOINTS = {
  categories: '/products/category-list',
  products: '/products',
  productsByCategory:'/products/category',
};

export const PRODUCTS_PER_PAGE = 12;

// https://dummyjson.com/products?limit=10&skip=10 - отримати всі продукти з пагінацією
// https://dummyjson.com/products/1 - отримати один продукт по ID
// https://dummyjson.com/products/search?q=nail - пошук продукту по ключовому слову
// https://dummyjson.com/products/category/smartphones - отримати продукти по категорії
