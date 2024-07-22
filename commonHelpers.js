import{a as m,S as w,i as g}from"./assets/vendor-ee72e1a4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();m.defaults.baseURL="https://pixabay.com";async function f(e,r,l){return(await m.get("/api/",{params:{key:"44981413-36d40c10f5ea072ce48bfd774",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:l}})).data}let h=new w(".gallery-item a",{captionsData:"alt",captionDelay:250});function S({webformatURL:e,largeImageURL:r,tags:l,likes:i,views:t,comments:a,downloads:n}){return`<li class="gallery-item">
          <a href="${r}">
            <div class="gallery-card">
              <img
                src="${e}"
                alt="${l}"
                class="gallery-card-image"
              />
              <div class="gallery-card-info">
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Likes</h3>
                  <p class="gallery-card-bottom">${i}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Views</h3>
                  <p class="gallery-card-bottom">${t}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Comments</h3>
                  <p class="gallery-card-bottom">${a}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Downloads</h3>
                  <p class="gallery-card-bottom">${n}</p>
                </div>
              </div>
            </div>
          </a>
        </li>`}function p(e){return e.map(S).join(" ")}function B(e){const r=p(e);o.galleryList.innerHTML=r,h.refresh()}function $(e){const r=p(e);o.galleryList.insertAdjacentHTML("beforeend",r),h.refresh()}const o={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-button")},d=15;let s,u,c,L;o.form.addEventListener("submit",q);o.loadMoreBtn.addEventListener("click",P);async function q(e){try{if(e.preventDefault(),c=e.currentTarget.elements.search.value.trim(),!c)return;M(),o.galleryList.innerHTML="",s=1;const r=await f(c,s,d);if(u=Math.ceil(r.totalHits/d),r.length===0)throw new Error;B(r.hits),v(),e.target.elements.search.value="",s++,L=Math.round(o.galleryList.firstElementChild.getBoundingClientRect().height)}catch{b(),y(),s=1,u=0,g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}}async function P(){try{y(),M();const e=await f(c,s,d);$(e.hits),v(),s++,window.scrollBy({top:L*2,behavior:"smooth"})}catch(e){g.error({message:`${e.message}`,position:"center"})}}function v(){s>=u?(g.info({message:"We're sorry, but you've reached the end of search results.",position:"center"}),y()):T(),b()}function M(){o.loader.classList.remove("hidden")}function b(){o.loader.classList.add("hidden")}function T(){o.loadMoreBtn.classList.remove("hidden")}function y(){o.loadMoreBtn.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
