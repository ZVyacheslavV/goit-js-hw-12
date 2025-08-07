import axios from 'axios';

export const NUMBER_OF_PAGES = 15;

export const getImagesByQuery = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '51625695-85db02b03381982e3fb3bbea7';

  const { data } = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: NUMBER_OF_PAGES,
      page: page,
    },
  });

  return data;
};
