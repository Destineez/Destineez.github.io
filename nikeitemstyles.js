// nikeitemstyles.js

function navigateTo(url) {
    window.location.href = url;
}

const mainImage = document.getElementById('mainImage');
const miniImages = document.querySelectorAll('.mini-image');
let currentIndex = 0;

miniImages.forEach((miniImage, index) => {
  miniImage.addEventListener('click', () => changeImage(index));
});

function changeImage(index) {
  currentIndex = index;
  const imagePaths = [
	'imagesmain/air-max-pulse-shoes-2bZSZVz.png',
	'imagesmain/air-max-pulse-shoes-2bZSZV.png', 
    'imagesmain/air-max-pulse-shoes-2bZSZVa.png', 
	'imagesmain/air-max-pulse-shoes-2bZSZVb.png', 
    'imagesmain/air-max-pulse-shoes-2bZSZVc.png', 
	'imagesmain/air-max-pulse-shoes-2bZSZVd.png', 
    'imagesmain/air-max-pulse-shoes-2bZSZVe.png', 
	'imagesmain/air-max-pulse-shoes-2bZSZVf.png'
	];

  mainImage.src = imagePaths[index];
}

function autoCycle() {
  currentIndex = (currentIndex + 1) % miniImages.length;
  changeImage(currentIndex);
}

const intervalId = setInterval(autoCycle, 3000);

miniImages.forEach((miniImage) => {
  miniImage.addEventListener('click', () => {
    clearInterval(intervalId);
  });
});