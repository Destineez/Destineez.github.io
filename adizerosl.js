// adizerosl.js

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
	'images/adizerosl.jpg',
	'images/adizerosl2.jpg',
    'images/adizerosl3.jpg',
    'images/adizerosl4.jpg',
    'images/adizerosl5.jpg',
    'images/adizerosl6.jpg',
    'images/adizerosl7.jpg',
    'images/adizerosl8.jpg',
	'images/adizerosl9.jpg',
	'images/adizerosl10.jpg',
	'images/adizerosl11.jpg',
	'images/adizerosl12.jpg',
	'images/adizerosl13.jpg',
	'images/adizerosl14.jpg',
	'images/adizerosl15.jpg'
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