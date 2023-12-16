// nikeinvicible3.js

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
	'images/nikeinvincible3.jpg',
	'images/invincible-3-2a.png', 
    'images/invincible-3-2b.png', 
	'images/invincible-3-2c.png', 
    'images/invincible-3-2d.png', 
	'images/invincible-3-2e.png', 
    'images/invincible-3-2f.png', 
	'images/invincible-3-2g.png'
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