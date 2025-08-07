import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51625695-85db02b03381982e3fb3bbea7';

export const getImagesByQuery = query =>
  axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(({ data }) => {
      if (!data.hits || data.hits.length === 0) {
        /* iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        }); */
        return null;
      }
      return data.hits;
    })
    .catch(error => {
      iziToast.error({
        message: `There is an error during getting image: ${error}`,
        position: 'topRight',
      });
      console.log(error);
      return null;
    });
