import { refs } from './refs';

export function renderCategories(categories) {
  const markup = categories
    .map(
      category => `
        <li class="categories__item">
            <button class="categories__btn" type="button">${category}</button>
        </li>
        `
    )
    .join('');
  refs.categoryList.insertAdjacentHTML('beforeend', markup);
}
