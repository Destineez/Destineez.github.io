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
	'images/owntheruntee.jpg',
	'images/owntheruntee2.jpg', 
    'images/owntheruntee3.jpg', 
	'images/owntheruntee4.jpg', 
   	'images/owntheruntee5.jpg', 
	'images/owntheruntee6.jpg', 
	'images/owntheruntee7.jpg', 
	'images/owntheruntee8.jpg', 
	'images/owntheruntee9.jpg'
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