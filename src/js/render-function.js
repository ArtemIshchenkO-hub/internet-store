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

export function renderProducts(products) {
  const markup = products
    .map(
      ({
        title,
        brand,
        category,
        price,
        thumbnail,
        id,
      }) => ` <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>

    `
    )
    .join('');
  refs.productsList.insertAdjacentHTML('beforeend', markup);
}

export function clearProducts() {
  refs.productsList.innerHTML = '';
}

export function renderProduct(product) {
  const {
    title,
    tags,
    description,
    shippingInformation,
    returnPolicy,
    price,
    thumbnail,
  } = product;
  const markup = `
    <img class="modal-product__img" src="${thumbnail}" alt="${title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${tags}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping:${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${returnPolicy}</p>
        <p class="modal-product__price">Price: ${price}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;

  refs.modalProduct.innerHTML = markup;
}
