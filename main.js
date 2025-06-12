const imgList = document.querySelectorAll(".img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let currentIndex = 0;
let slideInterval;
function showImage(index) {
  imgList.forEach((img) => {
    img.classList.remove("active");
  });
  if (index < 0) {
    currentIndex = imgList.length - 1;
  } else if (index >= imgList.length) {
    currentIndex = 0;
  } else currentIndex = index;
  return imgList[currentIndex].classList.add("active");
}

function showNext() {
  showImage(currentIndex + 1);
}
function showPre() {
  showImage(currentIndex - 1);
}
function stopAutoPlay() {
  clearInterval(slideInterval);
}
function autoPlay() {
  slideInterval = setInterval(showNext, 4000);
}
showImage(0);

autoPlay();

arrowRight.addEventListener("click", () => {
  stopAutoPlay();
  showNext();
  autoPlay();
});

arrowLeft.addEventListener("click", () => {
  stopAutoPlay();
  showPre();
  autoPlay();
});
