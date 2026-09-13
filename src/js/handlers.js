import iziToast from 'izitoast';
import { addActiveClass, togle } from './helpers';
import {
  fetchCategories,
  fetchProductById,
  fetchProductByName,
  fetchProducts,
  fetchProductsByCategory,
} from './products-api';
import { refs } from './refs';
import {
  clearProducts,
  renderCategories,
  renderProduct,
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

export async function getProductByName(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const productName = form.elements.searchValue.value.trim();

  if (!productName) {
    iziToast.warning({
      message: 'Enter something to search',
    });
    return;
  }

  try {
    clearProducts();
    const { products } = await fetchProductByName(productName);
    if (!products.length) {
      refs.notFound.classList.add('not-found--visible');
    } else {
      refs.notFound.classList.remove('not-found--visible');
    }

    renderProducts(products);
  } catch (error) {
    console.log(error.message);
  }
}

export async function clearSearchForm() {
  refs.searchForm.reset();
  clearProducts();
  await getProducts();
}

export async function showProduct({ target }) {
  if (!target.closest('li')) {
    return;
  }

  const productId = target.dataset.id;

  if (!productId) {
    return;
  }

  try {
    const product = await fetchProductById(productId);
    renderProduct(product);
    refs.modal.classList.add('modal--is-open');
  } catch (error) {
    console.log(error.message);
  }
}
