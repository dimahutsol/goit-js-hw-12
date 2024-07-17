import { getImagesByText } from './js/pixabay-api';

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

  getImagesByText(textToSearch);
  e.currentTarget.elements.search.value = '';
}
