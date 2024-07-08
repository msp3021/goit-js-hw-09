import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from './images.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(images);

galleryContainer.innerHTML = galleryMarkup;

function createGalleryMarkup(images) {
    return images
        .map(({ preview, original, description }) => {
            return `
                <li class="gallery-item">
                    <a class="gallery-link" href="${original}">
                        <img class="gallery-image" src="${preview}" alt="${description}" />
                    </a>
                </li>
            `;
        })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});