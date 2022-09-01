import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const markupCards = createImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", markupCards);

function createImgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">

    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
