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

const per_page = 15;
let page;
let totalPages;
let textToSearch;
let cardHeight;

refs.form.addEventListener('submit', handleFormSubmit);
refs.loadMoreBtn.addEventListener('click', handleLoadMoreClick);

async function handleFormSubmit(e) {
  try {
    e.preventDefault();

    textToSearch = e.currentTarget.elements.search.value.trim();
    if (!textToSearch) return;

    showLoader();
    refs.galleryList.innerHTML = '';
    page = 1;
    const images = await getImagesByText(textToSearch, page, per_page);
    totalPages = Math.ceil(images.totalHits / per_page);

    if (images.length === 0) {
      throw new Error();
    }

    renderGallery(images.hits);
    updateLoadMoreBtnStatus();
    e.target.elements.search.value = '';
    page++;

    cardHeight = Math.round(
      refs.galleryList.firstElementChild.getBoundingClientRect().height
    );
  } catch {
    hideLoader();
    hideLoadMoreBtn();
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
  try {
    hideLoadMoreBtn();
    showLoader();
    const images = await getImagesByText(textToSearch, page, per_page);
    renderMorePhotos(images.hits);
    updateLoadMoreBtnStatus();

    page++;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: `${error.message}`,
      position: 'center',
    });
  }
}

function updateLoadMoreBtnStatus() {
  if (page >= totalPages) {
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'center',
    });
    hideLoadMoreBtn();
  } else {
    showLoadMoreBtn();
  }
  hideLoader();
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showLoadMoreBtn() {
  refs.loadMoreBtn.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('hidden');
}
