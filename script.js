let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let galleryImages = document.querySelectorAll(".img-gallery img");
let currentIndex = 0;

function openFullImg(index) {
  currentIndex = index;
  fullImgBox.style.display = "flex";
  fullImg.src = galleryImages[currentIndex].src;
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

function nextImg() {
  do {
    currentIndex = (currentIndex + 1) % galleryImages.length;
  } while (galleryImages[currentIndex].style.display === "none"); // skip hidden
  fullImg.src = galleryImages[currentIndex].src;
}

function prevImg() {
  do {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  } while (galleryImages[currentIndex].style.display === "none"); // skip hidden
  fullImg.src = galleryImages[currentIndex].src;
}

function filterImages(category) {
  galleryImages.forEach((img) => {
    if (category === "all" || img.dataset.category === category) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
