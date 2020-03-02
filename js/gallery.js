// Activating image gallery
// The main task is to attach event listener to each thumbnail photo
// And the gallery to respond appropriatry
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newTitle = thumbnail.dataset.title;

      // Change main image
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newTitle);

      // Change which image is current
      let currentClass = "current"
      document.querySelector("."+currentClass).classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update main photo info
      let galleryInfo = document.querySelector("gallery-info");
      let title = document.querySelector(".title");
      let description = document.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}
