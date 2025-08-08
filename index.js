import{a as v,S as w,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g=15,u=async(r,t)=>{const i="https://pixabay.com/api/",a="51625695-85db02b03381982e3fb3bbea7",{data:e}=await v.get(i,{params:{key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:t}});return e},s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),p=r=>{const t=r.map(({webformatURL:i,largeImageURL:a,tags:e,likes:o,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${o}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${c}</p>
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
`);s.gallery.insertAdjacentHTML("beforeend",t),B.refresh()},m=()=>{s.loader.classList.remove("hidden")},h=()=>{s.loader.classList.add("hidden")},M=()=>{s.gallery.innerHTML=""},f=()=>{s.loadMoreBtn.classList.add("shown")},y=()=>{s.loadMoreBtn.classList.remove("shown")};let n=1,d;s.searchForm.addEventListener("submit",async r=>{if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),!d){l.error({message:"Please, fill the input",position:"topRight"});return}n=1,M(),y(),m();try{const{hits:t,totalHits:i}=await u(d,n);if(!(t!=null&&t.length)){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n>=Math.ceil(i/g)?l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):f(),r.target.reset(),p(t)}catch(t){l.error({message:`There is an error with searching images: ${t}`,position:"topRight"}),console.log(t)}finally{h()}});s.loadMoreBtn.addEventListener("click",async()=>{y(),m();try{const{hits:r,totalHits:t}=await u(d,n+1);p(r),n++,n>=Math.ceil(t/g)?l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}):f(),window.scrollBy({top:s.gallery.firstChild.getBoundingClientRect().height*2,behavior:"smooth"})}catch(r){l.error({message:`There is an error during loading more images: ${r}`,position:"topRight"}),console.log(r)}finally{h()}});
//# sourceMappingURL=index.js.map
