import{S as i,i as n}from"./assets/vendor-8c59ed88.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d({webformatURL:a,largeImageURL:l,tags:s,likes:r,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
          <a href="${l}">
            <div class="gallery-card">
              <img
                src="${a}"
                alt="${s}"
                class="gallery-card-image"
              />
              <div class="gallery-card-info">
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Likes</h3>
                  <p class="gallery-card-bottom">${r}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Views</h3>
                  <p class="gallery-card-bottom">${e}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Comments</h3>
                  <p class="gallery-card-bottom">${t}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Downloads</h3>
                  <p class="gallery-card-bottom">${o}</p>
                </div>
              </div>
            </div>
          </a>
        </li>`}function u(a){return a.map(d).join(" ")}function m(a){const l=u(a);c.galleryList.innerHTML=l,new i(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function y(a){const l="https://pixabay.com/api/",s=new URLSearchParams({key:"44981413-36d40c10f5ea072ce48bfd774",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});c.form.insertAdjacentHTML("afterend",'<span class="loader"></span>'),fetch(`${l}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):r.hits).then(r=>m(r)).catch(r=>console.log(r)).finally(()=>document.querySelector(".loader").remove())}const c={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery")};c.form.addEventListener("submit",f);function f(a){a.preventDefault(),c.galleryList.innerHTML="";const l=a.currentTarget.elements.search.value.trim();l&&(y(l),a.currentTarget.elements.search.value="")}
//# sourceMappingURL=commonHelpers.js.map
