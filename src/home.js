//Логіка сторінки Home

import {
  clearSearchForm,
  getCategories,
  getProductByName,
  getProducts,
  handleCategoryClick,
  showProduct,
} from './js/handlers';
import { refs } from './js/refs';

getCategories();
getProducts();

refs.categoryList.addEventListener('click', handleCategoryClick);
refs.searchForm.addEventListener('submit', getProductByName);
refs.clearBtn.addEventListener('click', clearSearchForm);
refs.productsList.addEventListener('click', showProduct);
