function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // what will happen when thumbnail is clicked
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newTitle = thumbnail.dataset.title;

      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newTitle);

      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
    });
  });
}
