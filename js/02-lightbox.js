import { galleryItems } from "./gallery-items.js";

const ulGallery = document.querySelector(".gallery");

const renderList = (arr) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
     </li>`
    )
    .join("");

  ulGallery.insertAdjacentHTML("beforeend", markup);
  const newLight = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
};

renderList(galleryItems);
