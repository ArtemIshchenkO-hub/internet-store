import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";function p(){document.querySelector(".categories__btn").classList.add("categories__btn--active")}const g="https://dummyjson.com",r={categories:"/products/category-list",products:"/products"},a=12;c.defaults.baseURL=g;async function _(){const{data:t}=await c.get(r.categories);return t}async function m(t){const{data:s}=await c.get(r.products,{params:{limit:a,skip:(t-1)*a}});return s}const o={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products")};function y(t){const s=t.map(e=>`
        <li class="categories__item">
            <button class="categories__btn" type="button">${e}</button>
        </li>
        `).join("");o.categoryList.insertAdjacentHTML("beforeend",s)}function f(t){const s=t.map(({title:e,brand:n,category:i,price:d,thumbnail:u,id:l})=>` <li class="products__item" data-id="${l}">
    <img class="products__image" src="${u}" alt="${e}"/>
    <p class="products__title">${e}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${n}</span></p>
    <p class="products__category">Category: ${i}</p>
    <p class="products__price">Price: ${d}$</p>
 </li>

    `).join("");o.productsList.insertAdjacentHTML("beforeend",s)}async function b(){try{const t=await _();y(["All",...t]),p()}catch(t){console.log(t.message)}}async function C(){try{const{products:t}=await m(1);f(t)}catch(t){console.log(t.message)}}async function L(t){if(t.target.nodeName!=="BUTTON")return;const s=t.target.textContent;console.log(s)}b();C();o.categoryList.addEventListener("click",L);
//# sourceMappingURL=index.js.map
