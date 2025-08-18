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
let query;

//Checking pagination function
const handlePagination = (page, totalHits) =>
  page < Math.ceil(totalHits / PER_PAGE)
    ? showLoadMoreButton()
    : iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });

//Searching form
refs.searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.error({ message: 'Please, fill the input', position: 'topRight' });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (!hits?.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    handlePagination(page, totalHits);

    e.target.reset();
    createGallery(hits);
  } catch (error) {
    iziToast.error({
      message: `There is an error with searching images: ${error}`,
      position: 'topRight',
    });
    console.log(error);
  } /* finally {
    hideLoader();
  } */

  hideLoader();
});

//Load more button
refs.loadMoreBtn.addEventListener('click', async () => {
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page + 1);
    createGallery(hits);
    page++;

    handlePagination(page, totalHits);

    window.scrollBy({
      top: refs.gallery.firstChild.getBoundingClientRect().height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: `There is an error during loading more images: ${error}`,
      position: 'topRight',
    });
    console.log(error);
  } /* finally {
    hideLoader();
  } */

  hideLoader();
});

/* function handlePagination(page, totalHits) {
  if (page >= Math.ceil(totalHits / PER_PAGE)) {
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMoreButton();
  }
} */
