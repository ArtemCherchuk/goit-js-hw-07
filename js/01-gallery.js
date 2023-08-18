import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulGallery = document.querySelector(".gallery");
// console.log(galleryItems);

const renderList = (arr) => {
  const markup = arr
    .map(
      (item) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
    )
    .join("");

  ulGallery.insertAdjacentHTML("beforeend", markup);
};

const handleListClick = (event) => {
  event.preventDefault();

  if (event.currentTarget === event.target) {
    return;
  }

  const currentListItem = event.target.closest(".gallery__image");
  const currentListItemData = currentListItem.dataset.source;
  const itemGallery = galleryItems.find(
    (item) => item.original === currentListItemData
  );
  const instance = basicLightbox.create(
    `<div class="modal">
  <img src="${itemGallery.original}"
   </div>`
  );

  instance.show();
};

renderList(galleryItems);
ulGallery.addEventListener("click", handleListClick);
