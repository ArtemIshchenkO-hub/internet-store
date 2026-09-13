import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";function a(){document.querySelector(".categories__btn").classList.add("categories__btn--active")}const c="https://dummyjson.com",r={categories:"/products/category-list"};e.defaults.baseURL=c;async function n(){const{data:t}=await e.get(r.categories);return t}const i={categoryList:document.querySelector(".categories")};function g(t){const o=t.map(s=>`
        <li class="categories__item">
            <button class="categories__btn" type="button">${s}</button>
        </li>
        `).join("");i.categoryList.insertAdjacentHTML("beforeend",o)}async function l(){try{const t=await n();g(["All",...t]),a()}catch(t){console.log(t.message)}}l();
//# sourceMappingURL=index.js.map
