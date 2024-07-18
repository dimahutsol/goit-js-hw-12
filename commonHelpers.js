import{S as i,i as n}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function d(t){const a="https://pixabay.com/api/",l=new URLSearchParams({key:"44981413-36d40c10f5ea072ce48bfd774",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return c.form.insertAdjacentHTML("afterend",'<span class="loader"></span>'),fetch(`${a}?${l}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}let u=new i(".gallery-item a",{captionsData:"alt",captionDelay:250});function m({webformatURL:t,largeImageURL:a,tags:l,likes:s,views:e,comments:r,downloads:o}){return`<li class="gallery-item">
          <a href="${a}">
            <div class="gallery-card">
              <img
                src="${t}"
                alt="${l}"
                class="gallery-card-image"
              />
              <div class="gallery-card-info">
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Likes</h3>
                  <p class="gallery-card-bottom">${s}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Views</h3>
                  <p class="gallery-card-bottom">${e}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Comments</h3>
                  <p class="gallery-card-bottom">${r}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Downloads</h3>
                  <p class="gallery-card-bottom">${o}</p>
                </div>
              </div>
            </div>
          </a>
        </li>`}function f(t){return t.map(m).join(" ")}function y(t){const a=f(t);c.galleryList.innerHTML=a,u.refresh()}const c={form:document.querySelector(".form"),galleryList:document.querySelector(".gallery")};c.form.addEventListener("submit",g);function g(t){t.preventDefault(),c.galleryList.innerHTML="";const a=t.currentTarget.elements.search.value.trim();a&&(d(a).then(l=>l.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}):l.hits).then(l=>y(l)).catch(l=>console.log(l)).finally(()=>document.querySelector(".loader").remove()),t.currentTarget.elements.search.value="")}
//# sourceMappingURL=commonHelpers.js.map
