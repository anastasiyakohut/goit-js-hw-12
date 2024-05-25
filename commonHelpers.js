import{a as h,i as l,S as y}from"./assets/vendor-f144e563.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=15,L="43997901-59e2ef8a5969ad3162d77619c";h.defaults.baseURL="https://pixabay.com/api/";const v=async(s,i=1)=>(await h.get("",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:i}})).data,E=s=>s.map(({webformatURL:i,largeImageURL:o,tags:r,likes:e,views:t,comments:a,downloads:g})=>`
      <li class="item-list">
        <a href="${o}" class="item-list-link">
          <img class="item-list-img" src="${i}" alt="${r}">
        </a>
        <div class='markup-info'>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Likes</h3>
            <p class="item-list-text">${e}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Views</h3>
            <p class="item-list-text">${t}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Comments</h3>
            <p class="item-list-text">${a}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Downloads</h3>
            <p class="item-list-text">${g}</p>
          </div>
        </div>
      </li>`).join(""),m=document.querySelector(".gallery"),x=document.querySelector(".search-field"),b=document.querySelector(".form"),c=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let d=1,n="";async function p(s,i){try{const o=await v(s,i);if(c.classList.add("is-hidden"),o.totalHits===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040"});return}m.insertAdjacentHTML("beforeend",E(o.hits)),new y(".gallery a").refresh(),i*f>=o.totalHits?(u.classList.add("is-hidden"),l.show({message:"No more images to load",position:"topRight",color:"#EF4040"})):u.classList.remove("is-hidden")}catch(o){console.log(o),l.error({title:"Error",message:"Something went wrong",position:"topRight",color:"#EF4040"})}finally{c.classList.add("is-hidden")}}function S(s){if(s.preventDefault(),n=x.value.trim(),n===""){m.innerHTML="",s.target.reset(),l.error({title:"Error",message:"Illegal operation",position:"topRight",color:"#EF4040"});return}d=1,m.innerHTML="",c.classList.remove("is-hidden"),p(n,d),s.target.reset()}function P(){d+=1,c.classList.remove("is-hidden"),p(n,d)}b.addEventListener("submit",S);u.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map