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
  <a class="gallery__link" href=${original} >
    <img
      class="gallery__image"
      src=${preview}
      data-source = ${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}
console.log(createImgMarkup(galleryItems));

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}">
`);

  instance.show();
});
