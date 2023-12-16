// PumaT7Men'sTrackPants.js

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
	'imagesmain/T7's Men's Track PantsA.jpg',
	'imagesmain/T7's Men's Track PantsB.jpg', 
    'imagesmain/T7's Men's Track PantsC.jpg', 
	'imagesmain/T7's Men's Track PantsD.jpg', 
   	'imagesmain/T7's Men's Track PantsE.jpg', 
	'imagesmain/T7's Men's Track PantsF.jpg', 
	'imagesmain/T7's Men's Track PantsG.jpg'
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