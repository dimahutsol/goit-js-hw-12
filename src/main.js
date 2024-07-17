import { getImagesByText } from './js/pixabay-api';
// import { renderGallery } from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
};

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
  //   debugger;
  e.preventDefault();
  refs.galleryList.innerHTML = '';
  const textToSearch = e.target.elements.search.value.trim();
  if (!textToSearch) {
    return;
  } else {
    //   getImagesByText(textToSearch).then(images => renderGallery(images));
    getImagesByText(textToSearch);
  }
}
