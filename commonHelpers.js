import{a as y,S as L,i as g}from"./assets/vendor-ee72e1a4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();y.defaults.baseURL="https://pixabay.com";async function h(r,a,o){return t.loader.classList.remove("hidden"),t.loadMoreBtn.classList.add("hidden"),(await y.get("/api/",{params:{key:"44981413-36d40c10f5ea072ce48bfd774",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:o}})).data}let m=new L(".gallery-item a",{captionsData:"alt",captionDelay:250});function v({webformatURL:r,largeImageURL:a,tags:o,likes:i,views:e,comments:s,downloads:n}){return`<li class="gallery-item">
          <a href="${a}">
            <div class="gallery-card">
              <img
                src="${r}"
                alt="${o}"
                class="gallery-card-image"
              />
              <div class="gallery-card-info">
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Likes</h3>
                  <p class="gallery-card-bottom">${i}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Views</h3>
                  <p class="gallery-card-bottom">${e}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Comments</h3>
                  <p class="gallery-card-bottom">${s}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Downloads</h3>
                  <p class="gallery-card-bottom">${n}</p>
                </div>
              </div>
            </div>
          </a>
        </li>`}function f(r){return r.map(v).join(" ")}function M(r){const a=f(r);t.galleryList.innerHTML=a,m.refresh()}function b(r){const a=f(r);t.galleryList.insertAdjacentHTML("beforeend",a),m.refresh()}const t={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-load-button")};let c,l;const d=15;let u,p;t.form.addEventListener("submit",w);t.loadMoreBtn.addEventListener("click",B);async function w(r){try{if(r.preventDefault(),t.galleryList.innerHTML="",l=1,c=r.currentTarget.elements.search.value.trim(),!c)return;const a=await h(c,l,d);if(l+=1,u=Math.ceil(a.totalHits/d),a.length===0)throw new Error;M(a.hits),t.loader.classList.add("hidden"),t.loadMoreBtn.classList.remove("hidden"),r.target.elements.search.value="",p=Math.round(t.galleryList.firstElementChild.getBoundingClientRect().height)}catch{t.loader.classList.add("hidden"),t.loadMoreBtn.classList.add("hidden"),l=1,u=0,g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}}async function B(){if(l>u){g.info({message:"We're sorry, but you've reached the end of search results.",position:"center"}),t.loader.classList.add("hidden"),t.loadMoreBtn.classList.add("hidden");return}const r=await h(c,l,d);l+=1,b(r.hits),t.loader.classList.add("hidden"),t.loadMoreBtn.classList.remove("hidden"),window.scrollBy({top:p*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
