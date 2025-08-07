import{a as b,i as a,S as v}from"./assets/vendor-ChKhXQjG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const $="https://pixabay.com/api/",w="51625695-85db02b03381982e3fb3bbea7",u=(r,t)=>b.get($,{params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}}).then(({data:i})=>!i.hits||i.hits.length===0?null:i.hits).catch(i=>(a.error({message:`There is an error during getting image: ${i}`,position:"topRight"}),console.log(i),null)),s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new v(".gallery a",{captionsData:"alt",captionDelay:250}),p=r=>{const t=r.map(({webformatURL:i,largeImageURL:n,tags:e,likes:o,views:l,comments:y,downloads:L})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${n}"
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
                  <p class="img-info-value">${l}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${y}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${L}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);s.gallery.insertAdjacentHTML("beforeend",t),B.refresh()},d=()=>{s.loader.classList.remove("hidden")},m=()=>{s.loader.classList.add("hidden")},M=()=>{s.gallery.innerHTML=""},h=()=>{s.loadMoreBtn.classList.add("shown")},f=()=>{s.loadMoreBtn.classList.remove("shown")};let g=1,c;s.searchForm.addEventListener("submit",r=>{if(r.preventDefault(),c=r.target.elements["search-text"].value.trim(),!c){a.error({message:"Please, fill the input",position:"topRight"});return}M(),f(),d(),u(c,g).then(t=>{if(!((t==null?void 0:t.length)>0)){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t),h(),g=1}).catch(t=>{a.error({message:`There is an error with receiving images: ${t}`,position:"topRight"}),console.log(t)}).finally(()=>{m(),r.target.reset()})});s.loadMoreBtn.addEventListener("click",()=>{f(),d(),u(c,++g).then(r=>{p(r),h()}).catch(r=>{g=1,a.error({message:`There is an error during loading more images: ${r}`,position:"topRight"}),console.log(r)}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map
