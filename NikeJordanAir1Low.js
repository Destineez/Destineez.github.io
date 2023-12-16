// NikeJordanAir1Low.js

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
	'images/air-jordan-1-low-a.png',
	'images/air-jordan-1-low-b.png', 
    'images/air-jordan-1-low-c.png', 
	'images/air-jordan-1-low-d.png', 
    'images/air-jordan-1-low-e.png', 
	'images/air-jordan-1-low-f.png', 
    'images/air-jordan-1-low-h.png', 
	'images/air-jordan-1-low-i.png'
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