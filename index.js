import{a as p,i as n,S as g}from"./assets/vendor-ChKhXQjG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",f="51625695-85db02b03381982e3fb3bbea7",h=o=>p.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>!t.hits||t.hits.length===0?null:t.hits).catch(t=>(n.error({message:`There is an error during getting image: ${t}`,position:"topRight"}),console.log(t),null)),l={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},d=new g(".gallery a",{captionsData:"alt",captionDelay:250}),y=o=>{const t=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:c,downloads:u})=>`<li class="gallery-item">
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
                  <p class="img-info-value">${s}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${c}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${u}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);l.gallery.innerHTML=t,d.refresh()},L=()=>{l.loader.classList.remove("hidden")},b=()=>{l.loader.classList.add("hidden")},v=()=>{l.gallery.innerHTML=""};l.searchForm.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please, fill the input",position:"topRight"});return}v(),L(),h(t).then(i=>{if(!((i==null?void 0:i.length)>0)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i)}).catch(i=>{n.error({message:`There is an error with receiving images: ${i}`,position:"topRight"}),console.log(i)}).finally(()=>{b(),o.target.reset()})});
//# sourceMappingURL=index.js.map
