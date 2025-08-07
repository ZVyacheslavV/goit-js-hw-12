import{a as b,i as n,S as v}from"./assets/vendor-ChKhXQjG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const w="https://pixabay.com/api/",B="51625695-85db02b03381982e3fb3bbea7",p=(o,t)=>b.get(w,{params:{key:B,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:198,page:t}}).then(({data:i})=>!i.hits||i.hits.length===0?null:i.hits).catch(i=>(n.error({message:`There is an error during getting image: ${i}`,position:"topRight"}),console.log(i),null)),s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},M=new v(".gallery a",{captionsData:"alt",captionDelay:250}),d=o=>{const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:l,comments:y,downloads:L})=>`<li class="gallery-item">
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
                  <p class="img-info-value">${r}</p>
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
`);s.gallery.insertAdjacentHTML("beforeend",t),M.refresh()},g=()=>{s.loader.classList.remove("hidden")},m=()=>{s.loader.classList.add("hidden")},S=()=>{s.gallery.innerHTML=""},f=()=>{s.loadMoreBtn.classList.add("shown")},h=()=>{s.loadMoreBtn.classList.remove("shown")};let u=1,c;s.searchForm.addEventListener("submit",o=>{if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),!c){n.error({message:"Please, fill the input",position:"topRight"});return}S(),h(),g(),p(c,u).then(t=>{if(!((t==null?void 0:t.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d(t),u=1}).catch(t=>{n.error({message:`There is an error with receiving images: ${t}`,position:"topRight"}),console.log(t)}).finally(()=>{m(),o.target.reset(),f()})});s.loadMoreBtn.addEventListener("click",()=>{h(),g(),p(c,++u).then(o=>{d(o),f()}).catch(o=>{u=1,console.log(o)}).finally(()=>{m()})});
//# sourceMappingURL=index.js.map
