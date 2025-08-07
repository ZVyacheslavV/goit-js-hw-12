import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

let page = 1;
let searchQuery;

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  searchQuery = e.target.elements['search-text'].value.trim();
  if (!searchQuery) {
    iziToast.error({ message: 'Please, fill the input', position: 'topRight' });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  getImagesByQuery(searchQuery, page)
    .then(({ hits, totalHits }) => {
      if (!(hits?.length > 0) /* !images || !images.length === 0 */) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      if (page > totalHits / PER_PAGE) {
        iziToast.error({
          position: 'topRight',
          message: 'There are all posts to load',
        });
        createGallery(hits);
        page = 1;
        return;
      }

      createGallery(hits);
      showLoadMoreButton();
      page = 1;

      const cardHeight = refs.gallery.firstChild.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    })
    .catch(error => {
      iziToast.error({
        message: `There is an error with searching images: ${error}`,
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      e.target.reset();
    });
});

refs.loadMoreBtn.addEventListener('click', () => {
  hideLoadMoreButton();
  showLoader();

  getImagesByQuery(searchQuery, ++page)
    .then(({ hits, totalHits }) => {
      if (page > totalHits / PER_PAGE) {
        iziToast.error({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
        page = 1;
        return;
      }

      createGallery(hits);
      showLoadMoreButton();
    })
    .catch(error => {
      page = 1;
      iziToast.error({
        message: `There is an error during loading more images: ${error}`,
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
