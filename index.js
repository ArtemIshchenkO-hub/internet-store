import"./assets/styles-JE8YjOlG.js";import{a as s,i as f}from"./assets/vendor-ZnMw6IGI.js";function h(){document.querySelector(".categories__btn").classList.add("categories__btn--active")}function b(t){document.querySelector(".categories__btn--active").classList.remove("categories__btn--active"),t.classList.add("categories__btn--active")}const L="https://dummyjson.com",a={categories:"/products/category-list",products:"/products",productsByCategory:"/products/category",searchProduct:"/products/search"},m=12;s.defaults.baseURL=L;async function P(){const{data:t}=await s.get(a.categories);return t}async function g(t){const{data:o}=await s.get(a.products,{params:{limit:m,skip:(t-1)*m}});return o}async function $(t){const{data:o}=await s.get(`${a.productsByCategory}/${t}`);return o}async function B(t){const{data:o}=await s.get(`${a.products}/${t}`);return o}async function v(t){const{data:o}=await s.get(a.searchProduct,{params:{q:t}});return o}const e={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),notFound:document.querySelector(".not-found"),searchForm:document.querySelector(".search-form"),clearBtn:document.querySelector(".search-form__btn-clear"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product")};function w(t){const o=t.map(c=>`
        <li class="categories__item">
            <button class="categories__btn" type="button">${c}</button>
        </li>
        `).join("");e.categoryList.insertAdjacentHTML("beforeend",o)}function l(t){const o=t.map(({title:c,brand:r,category:n,price:i,thumbnail:d,id:u})=>` <li class="products__item" data-id="${u}">
    <img class="products__image" src="${d}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${r}</span></p>
    <p class="products__category">Category: ${n}</p>
    <p class="products__price">Price: ${i}$</p>
 </li>

    `).join("");e.productsList.insertAdjacentHTML("beforeend",o)}function p(){e.productsList.innerHTML=""}function C(t){const{title:o,tags:c,description:r,shippingInformation:n,returnPolicy:i,price:d,thumbnail:u}=t,_=`
    <img class="modal-product__img" src="${u}" alt="${o}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o}</p>
        <ul class="modal-product__tags">${c}</ul>
        <p class="modal-product__description">${r}</p>
        <p class="modal-product__shipping-information">Shipping:${n}</p>
        <p class="modal-product__return-policy">Return Policy:${i}</p>
        <p class="modal-product__price">Price: ${d}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`;e.modalProduct.innerHTML=_}async function S(){try{const t=await P();w(["All",...t]),h()}catch(t){console.log(t.message)}}async function y(){try{const{products:t}=await g(1);l(t)}catch(t){console.log(t.message)}}async function q(t){if(t.target.nodeName!=="BUTTON")return;const o=t.target.textContent;b(t.target);try{let c=null;if(p(),o==="All"?c=await g(1):c=await $(o),c.products.length===0){e.notFound.classList.add("not-found--visible");return}l(c.products)}catch(c){console.log(c.message)}}async function T(t){t.preventDefault();const c=t.currentTarget.elements.searchValue.value.trim();if(!c){f.warning({message:"Enter something to search"});return}try{p();const{products:r}=await v(c);r.length?e.notFound.classList.remove("not-found--visible"):e.notFound.classList.add("not-found--visible"),l(r)}catch(r){console.log(r.message)}}async function E(){e.searchForm.reset(),p(),await y()}async function k({target:t}){if(!t.closest("li"))return;const o=t.dataset.id;if(o)try{const c=await B(o);C(c),e.modal.classList.add("modal--is-open")}catch(c){console.log(c.message)}}S();y();e.categoryList.addEventListener("click",q);e.searchForm.addEventListener("submit",T);e.clearBtn.addEventListener("click",E);e.productsList.addEventListener("click",k);
//# sourceMappingURL=index.js.map
