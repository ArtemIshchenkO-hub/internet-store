import"./assets/styles-JE8YjOlG.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";function y(){document.querySelector(".categories__btn").classList.add("categories__btn--active")}function _(t){document.querySelector(".categories__btn--active").classList.remove("categories__btn--active"),t.classList.add("categories__btn--active")}const m="https://dummyjson.com",r={categories:"/products/category-list",products:"/products",productsByCategory:"/products/category"},a=12;s.defaults.baseURL=m;async function f(){const{data:t}=await s.get(r.categories);return t}async function n(t){const{data:e}=await s.get(r.products,{params:{limit:a,skip:(t-1)*a}});return e}async function b(t){const{data:e}=await s.get(`${r.productsByCategory}/${t}`);return e}const c={categoryList:document.querySelector(".categories"),productsList:document.querySelector(".products"),notFound:document.querySelector(".not-found")};function L(t){const e=t.map(o=>`
        <li class="categories__item">
            <button class="categories__btn" type="button">${o}</button>
        </li>
        `).join("");c.categoryList.insertAdjacentHTML("beforeend",e)}function i(t){const e=t.map(({title:o,brand:u,category:d,price:l,thumbnail:g,id:p})=>` <li class="products__item" data-id="${p}">
    <img class="products__image" src="${g}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${u}</span></p>
    <p class="products__category">Category: ${d}</p>
    <p class="products__price">Price: ${l}$</p>
 </li>

    `).join("");c.productsList.insertAdjacentHTML("beforeend",e)}function C(){c.productsList.innerHTML=""}async function $(){try{const t=await f();L(["All",...t]),y()}catch(t){console.log(t.message)}}async function B(){try{const{products:t}=await n(1);i(t)}catch(t){console.log(t.message)}}async function P(t){if(t.target.nodeName!=="BUTTON")return;const e=t.target.textContent;_(t.target);try{let o=null;if(C(),e==="All"?o=await n(1):o=await b(e),o.products.length===0){c.notFound.classList.add("not-found--visible");return}i(o.products)}catch(o){console.log(o.message)}}$();B();c.categoryList.addEventListener("click",P);
//# sourceMappingURL=index.js.map
