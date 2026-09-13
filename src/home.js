//Логіка сторінки Home

import { getCategories, getProducts, handleCategoryClick } from './js/handlers';
import { refs } from './js/refs';

getCategories();
getProducts();

refs.categoryList.addEventListener('click', handleCategoryClick);
