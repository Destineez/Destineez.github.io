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
	'imagesmain/air-jordan-1-low-a.png',
	'imagesmain/air-jordan-1-low-b.png', 
    'imagesmain/air-jordan-1-low-c.png', 
	'imagesmain/air-jordan-1-low-d.png', 
    'imagesmain/air-jordan-1-low-e.png', 
	'imagesmain/air-jordan-1-low-f.png', 
    'imagesmain/air-jordan-1-low-h.png', 
	'imagesmain/air-jordan-1-low-i.png'
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