// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const listRef = document.querySelector('.gallery'); // Привязываю список

const createGallery = galleryItems // Создаю разметку
  .map(
    item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</li>`
  )
  .join('');

listRef.innerHTML += createGallery; //Добавляю разметку

listRef.addEventListener('click', onImageClick); // ИВЕНТ ПО КЛИКУ

function onImageClick(event) {
  event.preventDefault();
  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: instance => {
        document.addEventListener('keydown', onCloseByEsc);
      },
      onClose: instance => {
        document.removeEventListener('keydown', onCloseByEsc);
      },
    }
  );
  instance.show();

  function onCloseByEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}

console.log(galleryItems);
