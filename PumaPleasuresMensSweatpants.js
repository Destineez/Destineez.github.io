// PumaPleasuresMenSweatpants.js

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
	'images/PumaPleasuresMenSweatpantsA.jpg',
	'images/PumaPleasuresMenSweatpantsB.jpg', 
    'images/PumaPleasuresMenSweatpantsC.jpg', 
	'images/PumaPleasuresMenSweatpantsD.jpg', 
   	'images/PumaPleasuresMenSweatpantsE.jpg', 
	'images/PumaPleasuresMenSweatpantsF.jpg', 
	'images/PumaPleasuresMenSweatpantsG.jpg'
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