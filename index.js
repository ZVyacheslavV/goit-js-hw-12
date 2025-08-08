import{a as v,S as w,i as c}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const u=15,p=async(r,t)=>{const a="https://pixabay.com/api/",i="51625695-85db02b03381982e3fb3bbea7",{data:e}=await v.get(a,{params:{key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:t}});return e},s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),f=r=>{const t=r.map(({webformatURL:a,largeImageURL:i,tags:e,likes:o,views:n,comments:L,downloads:b})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${i}"
            >
              <img
                class="gallery-image"
                src="${a}"
                alt="${e}"
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
`);s.gallery.insertAdjacentHTML("beforeend",t),B.refresh()},g=()=>{s.loader.classList.remove("hidden")},m=()=>{s.loader.classList.add("hidden")},M=()=>{s.gallery.innerHTML=""},h=()=>{s.loadMoreBtn.classList.add("shown")},y=()=>{s.loadMoreBtn.classList.remove("shown")};let l=1,d;s.searchForm.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),!d){c.error({message:"Please, fill the input",position:"topRight"});return}l=1,M(),y(),g();try{const{hits:t,totalHits:a}=await p(d,l);if(!(t!=null&&t.length)){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l>=Math.ceil(a/u)?c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):h(),f(t),r.target.reset()}catch{}finally{m()}});s.loadMoreBtn.addEventListener("click",async()=>{y(),g();try{const{hits:r,totalHits:t}=await p(d,l+1);f(r),l++,l>=Math.ceil(t/u)?c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):h(),window.scrollBy({top:s.gallery.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}catch{}finally{m()}});
//# sourceMappingURL=index.js.map
