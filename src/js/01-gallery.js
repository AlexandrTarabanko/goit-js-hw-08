// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox'; //Imports
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listRef = document.querySelector('.gallery'); // Привязываю список

const createGallery = galleryItems // Создаю разметку
  .map(
    item => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
  )
  .join('');

listRef.innerHTML += createGallery; //Добавляю разметку

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: `alt`,
});
console.log(galleryItems);
