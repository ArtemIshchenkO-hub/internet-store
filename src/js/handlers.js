import { addActiveClass } from './helpers';
import { fetchCategories, fetchProducts } from './products-api';
import { renderCategories, renderProducts } from './render-function';

export async function getCategories() {
  try {
    const categories = await fetchCategories();
    renderCategories(['All', ...categories]);
    addActiveClass();
  } catch (error) {
    console.log(error.message);
  }
}

export async function getProducts() {
  try {
    const { products } = await fetchProducts(1);
    renderProducts(products);
  } catch (error) {
    console.log(error.message);
  }
}

export async function handleCategoryClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const category = event.target.textContent;
  console.log(category);
}
