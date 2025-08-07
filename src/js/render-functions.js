import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

const galleryLightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
            <a
              class="gallery-link"
              href="${largeImageURL}"
            >
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${likes}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${views}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${comments}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${downloads}</p>
                </li>
              </ul>
            </a>
          </li>`
    )
    .join('\n');

  refs.gallery.innerHTML = markup;

  galleryLightBox.refresh();
};

export const showLoader = () => {
  refs.loader.classList.remove('hidden');
};

export const hideLoader = () => {
  refs.loader.classList.add('hidden');
};

export const clearGallery = () => {
  refs.gallery.innerHTML = '';
};
