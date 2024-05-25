import{a as u,S as y,i as a}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const f=15,L="43997901-59e2ef8a5969ad3162d77619c";u.defaults.baseURL="https://pixabay.com/api/";const v=async(t,o=1)=>(await u.get("",{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:o}})).data,E=t=>t.map(({webformatURL:o,largeImageURL:i,tags:l,likes:e,views:s,comments:r,downloads:g})=>`
      <li class="item-list">
        <a href="${i}" class="item-list-link">
          <img class="item-list-img" src="${o}" alt="${l}">
        </a>
        <div class='markup-info'>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Likes</h3>
            <p class="item-list-text">${e}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Views</h3>
            <p class="item-list-text">${s}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Comments</h3>
            <p class="item-list-text">${r}</p>
          </div>
          <div class="item-list-info-text">
            <h3 class="item-list-title">Downloads</h3>
            <p class="item-list-text">${g}</p>
          </div>
        </div>
      </li>`).join(""),h=document.querySelector(".gallery"),S=document.querySelector(".search-field"),b=document.querySelector(".form"),d=document.querySelector(".loader"),n=document.querySelector(".load-more-btn");let m=1,c="";const w=new y(".gallery a");async function p(t,o){try{const i=await v(t,o);return d.classList.add("is-hidden"),i.totalHits===0?(n.classList.add("is-hidden"),a.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040"}),!1):(h.insertAdjacentHTML("beforeend",E(i.hits)),w.refresh(),o*f>=i.totalHits?(n.classList.add("is-hidden"),a.show({message:"We are sorry, but you have reached the end of search results.",position:"topRight",color:"#EF4040"})):n.classList.remove("is-hidden"),!0)}catch(i){return console.log(i),a.error({title:"Error",message:"Something went wrong",position:"topRight",color:"#EF4040"}),!1}finally{d.classList.add("is-hidden")}}function x(t){if(t.preventDefault(),c=S.value.trim(),c===""){h.innerHTML="",t.target.reset(),a.error({title:"Error",message:"Illegal operation",position:"topRight",color:"#EF4040"});return}m=1,h.innerHTML="",d.classList.remove("is-hidden"),p(c,m),t.target.reset()}const P=()=>{const t=document.querySelector(".gallery .item-list:last-child");if(t){const i=t.getBoundingClientRect().height*2;window.scrollBy({top:i,left:0,behavior:"smooth"})}};function q(){m+=1,d.classList.remove("is-hidden"),p(c,m).then(t=>{t&&P()})}b.addEventListener("submit",x);n.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
