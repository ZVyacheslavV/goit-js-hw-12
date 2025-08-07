import{a as v,S as w,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const p=15,u=async(r,t)=>{const l="https://pixabay.com/api/",a="51625695-85db02b03381982e3fb3bbea7",{data:e}=await v.get(l,{params:{key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t}});return e},s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),g=r=>{const t=r.map(({webformatURL:l,largeImageURL:a,tags:e,likes:o,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${a}"
            >
              <img
                class="gallery-image"
                src="${l}"
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
`);s.gallery.insertAdjacentHTML("beforeend",t),B.refresh()},m=()=>{s.loader.classList.remove("hidden")},f=()=>{s.loader.classList.add("hidden")},M=()=>{s.gallery.innerHTML=""},h=()=>{s.loadMoreBtn.classList.add("shown")},y=()=>{s.loadMoreBtn.classList.remove("shown")};let i=1,d;s.searchForm.addEventListener("submit",r=>{if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),!d){n.error({message:"Please, fill the input",position:"topRight"});return}M(),y(),m(),u(d,i).then(({hits:t,totalHits:l})=>{if(!((t==null?void 0:t.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(i>l/p){n.error({position:"topRight",message:"There are all posts to load"}),g(t),i=1;return}g(t),h(),i=1;const a=s.gallery.firstChild.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}).catch(t=>{n.error({message:`There is an error with searching images: ${t}`,position:"topRight"}),console.log(t)}).finally(()=>{f(),r.target.reset()})});s.loadMoreBtn.addEventListener("click",()=>{y(),m(),u(d,++i).then(({hits:r,totalHits:t})=>{if(i>t/p){n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),i=1;return}g(r),h()}).catch(r=>{i=1,n.error({message:`There is an error during loading more images: ${r}`,position:"topRight"}),console.log(r)}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map
