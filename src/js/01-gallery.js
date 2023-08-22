// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const listEl = document.querySelector('.gallery');
const everyEl = renderList(galleryItems);
listEl.insertAdjacentHTML('beforeend', everyEl);
function renderList(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li.style.listStyle = 'none' class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
   src="${preview}"
      alt="${description}"
      width="200" height="150"
    />
  </a>
</li.style.listStyle>`;
    })

    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
