import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByText } from './js/pixabay-api';
import { renderGallery, renderMorePhotos } from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  galleryList: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.js-load-button'),
};

let textToSearch;
let page;
const per_page = 15;
let totalPages;
let cardHeight;

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreClick);

async function handleFormSubmit(e) {
  try {
    e.preventDefault();

    refs.galleryList.innerHTML = '';
    page = 1;
    textToSearch = e.currentTarget.elements.search.value.trim();

    if (!textToSearch) return;
    const images = await getImagesByText(textToSearch, page, per_page);

    page += 1;
    totalPages = Math.ceil(images.totalHits / per_page);

    if (images.length === 0) {
      throw new Error();
    }
    renderGallery(images.hits);

    refs.loader.classList.add('hidden');
    refs.loadMoreBtn.classList.remove('hidden');
    e.target.elements.search.value = '';
    cardHeight = Math.round(
      refs.galleryList.firstElementChild.getBoundingClientRect().height
    );
  } catch {
    refs.loader.classList.add('hidden');
    refs.loadMoreBtn.classList.add('hidden');
    page = 1;
    totalPages = 0;
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
    });
  }
}

async function handleLoadMoreClick() {
  if (page > totalPages) {
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'center',
    });
    refs.loader.classList.add('hidden');
    refs.loadMoreBtn.classList.add('hidden');
    return;
  }

  const images = await getImagesByText(textToSearch, page, per_page);
  page += 1;

  renderMorePhotos(images.hits);

  refs.loader.classList.add('hidden');
  refs.loadMoreBtn.classList.remove('hidden');

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
