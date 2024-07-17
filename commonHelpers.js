import{S as c,i as n}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function d({webformatURL:l,largeImageURL:a,tags:s,likes:r,views:e,comments:t,downloads:o}){return`<li class="gallery-item">
          <a href="${a}">
            <div class="gallery-card">
              <img
                src="${l}"
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
        </li>`}function u(l){return l.map(d).join(" ")}function m(l){const a=u(l);i.galleryList.innerHTML=a,new c(".gallery-item a",{captionsData:"alt",captionDelay:250}).refresh()}function y(l){const a="https://pixabay.com/api/",s=new URLSearchParams({key:"44981413-36d40c10f5ea072ce48bfd774",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});i.form.insertAdjacentHTML("afterend",'<span class="loader"></span>'),fetch(`${a}?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):r.hits).then(r=>m(r)).catch(r=>console.log(r)).finally(()=>document.querySelector(".loader").remove())}const i={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery")};i.form.addEventListener("submit",f);function f(l){l.preventDefault(),i.galleryList.innerHTML="";const a=l.target.elements.search.value.trim();if(a)y(a);else return}
//# sourceMappingURL=commonHelpers.js.map
