import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from '../main';
import { renderGallery } from './render-functions';

export function getImagesByText(text) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '44981413-36d40c10f5ea072ce48bfd774',
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  refs.form.insertAdjacentHTML('afterend', '<span class="loader"></span>');

  fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      return data.hits;
    })
    .then(images => renderGallery(images))
    .catch(error => console.log(error));
  // .finally(() => document.querySelector('.loader').remove());
}
