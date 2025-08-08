import{a as v,S as w,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const g=15,u=async(r,e)=>{const i="https://pixabay.com/api/",a="51625695-85db02b03381982e3fb3bbea7",{data:t}=await v.get(i,{params:{key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:e}});return t},s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),p=r=>{const e=r.map(({webformatURL:i,largeImageURL:a,tags:t,likes:o,views:n,comments:L,downloads:b})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${i}"
                alt="${t}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${o}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${n}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${L}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${b}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);s.gallery.insertAdjacentHTML("beforeend",e),B.refresh()},m=()=>{s.loader.classList.remove("hidden")},f=()=>{s.loader.classList.add("hidden")},M=()=>{s.gallery.innerHTML=""},P=()=>{s.loadMoreBtn.classList.add("shown")},h=()=>{s.loadMoreBtn.classList.remove("shown")};let l=1,d;s.searchForm.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),!d){c.error({message:"Please, fill the input",position:"topRight"});return}l=1,M(),h(),m();try{const{hits:e,totalHits:i}=await u(d,l);if(!(e!=null&&e.length)){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(l,i),r.target.reset(),p(e)}catch(e){c.error({message:`There is an error with searching images: ${e}`,position:"topRight"}),console.log(e)}finally{f()}});s.loadMoreBtn.addEventListener("click",async()=>{h(),m();try{const{hits:r,totalHits:e}=await u(d,l+1);p(r),l++,y(l,e),window.scrollBy({top:s.gallery.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}catch(r){c.error({message:`There is an error during loading more images: ${r}`,position:"topRight"}),console.log(r)}finally{f()}});function y(r,e){r>=Math.ceil(e/g)?c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):P()}
//# sourceMappingURL=index.js.map
