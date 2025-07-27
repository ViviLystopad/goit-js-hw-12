import{a as f,S as p,i as n}from"./assets/vendor-67BWzQEt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="51418271-3ce051128b40e60140119ef7a";function h(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(m,{params:r}).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img class="gallery-image" src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p class="text"><b class="title-text">Likes:</b> ${t}</p>
          <p class="text"><b class="title-text">Views:</b> ${i}</p>
          <p class="text"><b class="title-text">Comments:</b> ${u}</p>
          <p class="text"><b class="title-text">Downloads:</b> ${d}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function x(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",o=>{o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),x(),h(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(s=>{n.error({message:"Oops! Something went wrong. Try again later.",position:"topRight"}),console.error(s)}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
