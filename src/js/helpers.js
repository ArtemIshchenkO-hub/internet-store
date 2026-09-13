export function addActiveClass() {
  const allCategoryBtn = document.querySelector('.categories__btn');
  allCategoryBtn.classList.add('categories__btn--active');
}
export function togle(btn) {
  const currentButton = document.querySelector('.categories__btn--active');
  currentButton.classList.remove('categories__btn--active');
  btn.classList.add('categories__btn--active');
}
