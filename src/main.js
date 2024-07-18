import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByText } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  refs.galleryList.innerHTML = '';
  const textToSearch = e.currentTarget.elements.search.value.trim();
  if (!textToSearch) return;

  getImagesByText(textToSearch)
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });
      }
      return data.hits;
    })
    .then(images => renderGallery(images))
    .catch(error => console.log(error))
    .finally(() => document.querySelector('.loader').remove());
  e.currentTarget.elements.search.value = '';
}
