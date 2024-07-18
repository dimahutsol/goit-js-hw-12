import { refs } from '../main';

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

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
