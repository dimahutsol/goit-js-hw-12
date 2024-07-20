import { refs } from '../main';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createCardMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
          <a href="${largeImageURL}">
            <div class="gallery-card">
              <img
                src="${webformatURL}"
                alt="${tags}"
                class="gallery-card-image"
              />
              <div class="gallery-card-info">
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Likes</h3>
                  <p class="gallery-card-bottom">${likes}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Views</h3>
                  <p class="gallery-card-bottom">${views}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Comments</h3>
                  <p class="gallery-card-bottom">${comments}</p>
                </div>
                <div class="gallery-card-item">
                  <h3 class="gallery-card-top">Downloads</h3>
                  <p class="gallery-card-bottom">${downloads}</p>
                </div>
              </div>
            </div>
          </a>
        </li>`;
}

function createGalleryMarkup(items) {
  return items.map(createCardMarkup).join(' ');
}

export function renderGallery(items) {
  const galleryMarkup = createGalleryMarkup(items);
  refs.galleryList.innerHTML = galleryMarkup;
  gallery.refresh();
}

export function renderMorePhotos(items) {
  const galleryMarkup = createGalleryMarkup(items);
  refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
  gallery.refresh();
}
