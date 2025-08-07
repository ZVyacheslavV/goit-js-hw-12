import{a as v,S as w,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const d=15,g=async(t,r)=>{const i="https://pixabay.com/api/",l="51625695-85db02b03381982e3fb3bbea7",{data:e}=await v.get(i,{params:{key:l,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:r}});return e},a={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),m=t=>{const r=t.map(({webformatURL:i,largeImageURL:l,tags:e,likes:o,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
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
`);a.gallery.insertAdjacentHTML("beforeend",r),B.refresh()},u=()=>{a.loader.classList.remove("hidden")},f=()=>{a.loader.classList.add("hidden")},M=()=>{a.gallery.innerHTML=""},h=()=>{a.loadMoreBtn.classList.add("shown")},y=()=>{a.loadMoreBtn.classList.remove("shown")};let s=1,p;a.searchForm.addEventListener("submit",t=>{if(t.preventDefault(),p=t.target.elements["search-text"].value.trim(),!p){n.error({message:"Please, fill the input",position:"topRight"});return}M(),y(),u(),g(p,s).then(({hits:r,totalHits:i})=>{if(!((r==null?void 0:r.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(s>i/d){n.error({position:"topRight",message:"We're sorry, there are no more posts to load"}),s=1;return}m(r),h(),s=1}).catch(r=>{n.error({message:`There is an error with searching images: ${r}`,position:"topRight"}),console.log(r)}).finally(()=>{f(),t.target.reset()})});a.loadMoreBtn.addEventListener("click",()=>{y(),u(),g(p,++s).then(({hits:t,totalHits:r})=>{if(s>r/d){n.error({position:"topRight",message:"We're sorry, there are no more posts to load"}),s=1;return}m(t),h()}).catch(t=>{s=1,n.error({message:`There is an error during loading more images: ${t}`,position:"topRight"}),console.log(t)}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map
