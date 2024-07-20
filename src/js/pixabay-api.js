import { refs } from '../main';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

export async function getImagesByText(text, page, per_page) {
  refs.loader.classList.remove('hidden');
  refs.loadMoreBtn.classList.add('hidden');

  const result = await axios.get('/api/', {
    params: {
      key: '44981413-36d40c10f5ea072ce48bfd774',
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    },
  });

  return result.data;
}
