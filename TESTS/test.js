window.addEventListener('DOMContentLoaded', function () {
  const sliderImages = document.querySelectorAll('.slider-image');
  const thumbnails = document.querySelectorAll('.thumbnail');

  let currentImage = 0;

  function showImage(index) {
    sliderImages.forEach(function (image, i) {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });

    thumbnails.forEach(function (thumbnail, i) {
      if (i === index) {
        thumbnail.classList.add('active');
      } else {
        thumbnail.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentImage++;
    if (currentImage >= sliderImages.length) {
      currentImage = 0;
    }
    showImage(currentImage);
  }

  function thumbnailClickHandler(index) {
    currentImage = index;
    showImage(currentImage);
  }

  // Set up automatic image sliding
  setInterval(nextImage, 5000);

  // Set up thumbnail click event listeners
  thumbnails.forEach(function (thumbnail, i) {
    thumbnail.addEventListener('click', function () {
      thumbnailClickHandler(i);
    });
  });

  // Show the first image initially
  showImage(currentImage);
});
