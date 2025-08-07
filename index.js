import{a as v,S as w,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const g=15,p=async(r,t)=>{const i="https://pixabay.com/api/",l="51625695-85db02b03381982e3fb3bbea7",{data:e}=await v.get(i,{params:{key:l,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:t}});return e},a={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),u=r=>{const t=r.map(({webformatURL:i,largeImageURL:l,tags:e,likes:o,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${l}"
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
`);a.gallery.insertAdjacentHTML("beforeend",t),B.refresh()},m=()=>{a.loader.classList.remove("hidden")},f=()=>{a.loader.classList.add("hidden")},M=()=>{a.gallery.innerHTML=""},h=()=>{a.loadMoreBtn.classList.add("shown")},y=()=>{a.loadMoreBtn.classList.remove("shown")};let s=1,d;a.searchForm.addEventListener("submit",r=>{if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),!d){n.error({message:"Please, fill the input",position:"topRight"});return}M(),y(),m(),p(d,s).then(({hits:t,totalHits:i})=>{if(!((t==null?void 0:t.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(s>i/g){n.error({position:"topRight",message:"There are all posts to load"}),s=1;return}u(t),h(),s=1}).catch(t=>{n.error({message:`There is an error with searching images: ${t}`,position:"topRight"}),console.log(t)}).finally(()=>{f(),r.target.reset()})});a.loadMoreBtn.addEventListener("click",()=>{y(),m(),p(d,++s).then(({hits:r,totalHits:t})=>{if(s>t/g){n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),s=1;return}u(r),h()}).catch(r=>{s=1,n.error({message:`There is an error during loading more images: ${r}`,position:"topRight"}),console.log(r)}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map
