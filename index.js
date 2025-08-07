import{a as v,S as w,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p=15,u=async(o,t)=>{const l="https://pixabay.com/api/",s="51625695-85db02b03381982e3fb3bbea7",{data:e}=await v.get(l,{params:{key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t}});return e},a={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn")},B=new w(".gallery a",{captionsData:"alt",captionDelay:250}),d=o=>{const t=o.map(({webformatURL:l,largeImageURL:s,tags:e,likes:r,views:c,comments:L,downloads:b})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${s}"
            >
              <img
                class="gallery-image"
                src="${l}"
                alt="${e}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${r}</p>
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
`);a.gallery.insertAdjacentHTML("beforeend",t),B.refresh()},m=()=>{a.loader.classList.remove("hidden")},f=()=>{a.loader.classList.add("hidden")},M=()=>{a.gallery.innerHTML=""},h=()=>{a.loadMoreBtn.classList.add("shown")},y=()=>{a.loadMoreBtn.classList.remove("shown")};let i=1,g;a.searchForm.addEventListener("submit",o=>{if(o.preventDefault(),g=o.target.elements["search-text"].value.trim(),!g){n.error({message:"Please, fill the input",position:"topRight"});return}M(),y(),m(),u(g,i).then(({hits:t,totalHits:l})=>{if(!((t==null?void 0:t.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(i>l/p){n.error({position:"topRight",message:"There are all posts to load"}),d(t),i=1;return}d(t),h(),i=1;const s=a.gallery.firstChild.getBoundingClientRect().height;console.log(s),window.scrollBy({top:s*2,behavior:"smooth"})}).catch(t=>{n.error({message:`There is an error with searching images: ${t}`,position:"topRight"}),console.log(t)}).finally(()=>{f(),o.target.reset()})});a.loadMoreBtn.addEventListener("click",()=>{y(),m(),u(g,++i).then(({hits:o,totalHits:t})=>{if(i>t/p){n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."}),i=1;return}d(o),h()}).catch(o=>{i=1,n.error({message:`There is an error during loading more images: ${o}`,position:"topRight"}),console.log(o)}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map
