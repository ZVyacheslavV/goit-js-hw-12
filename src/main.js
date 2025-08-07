import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

refs.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchQuery = e.target.elements['search-text'].value.trim();
  if (!searchQuery) {
    iziToast.error({ message: 'Please, fill the input', position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
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
    });
});
