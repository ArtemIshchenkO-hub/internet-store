import { addActiveClass, togle } from './helpers';
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
} from './products-api';
import { refs } from './refs';
import {
  clearProducts,
  renderCategories,
  renderProducts,
} from './render-function';

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
  togle(event.target);
  try {
    let products = null;
    clearProducts();
    if (category === 'All') {
      products = await fetchProducts(1);
    } else {
      products = await fetchProductsByCategory(category);
    }
    if (products.products.length === 0) {
      refs.notFound.classList.add('not-found--visible');
      return;
    }
    renderProducts(products.products);
  } catch (error) {
    console.log(error.message);
  }
}
