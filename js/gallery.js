function activateGallery() {
  let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // what will happen when thumbnail is clicked
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
    });
  });
}
