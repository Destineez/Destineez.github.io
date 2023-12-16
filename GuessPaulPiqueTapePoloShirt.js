// GuessPaulPiqueTapePoloShirt.js

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
	'images/GuessProdB1.jpg',
	'images/GuessProdB2.jpg', 
    'images/GuessProdB3.jpg', 
	'images/GuessProdB4.jpg', 
    'images/GuessProdB5.jpg'
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