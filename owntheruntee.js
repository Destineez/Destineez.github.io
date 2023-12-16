// owntheruntee.js

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
	'imagesmain/owntheruntee.jpg',
	'imagesmain/owntheruntee2.jpg', 
    'imagesmain/owntheruntee3.jpg', 
	'imagesmain/owntheruntee4.jpg', 
   	'imagesmain/owntheruntee5.jpg', 
	'imagesmain/owntheruntee6.jpg', 
	'imagesmain/owntheruntee7.jpg', 
	'imagesmain/owntheruntee8.jpg', 
	'imagesmain/owntheruntee9.jpg'
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