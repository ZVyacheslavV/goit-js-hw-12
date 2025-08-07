import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
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
    .then(images => {
      if (!(images?.length > 0) /* !images || !images.length === 0 */) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(images);
      page = 1;
    })
    .catch(error => {
      iziToast.error({
        message: `There is an error with receiving images: ${error}`,
        position: 'topRight',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      e.target.reset();
      showLoadMoreButton();
    });
});

refs.loadMoreBtn.addEventListener('click', () => {
  hideLoadMoreButton();
  showLoader();
  getImagesByQuery(searchQuery, ++page)
    .then(images => {
      createGallery(images);
      showLoadMoreButton();
    })
    .catch(error => {
      page = 1;
      console.log(error);
    })
    .finally(() => {
      hideLoader();
    });
});
