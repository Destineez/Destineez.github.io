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
	'imagesmain/adizerosl.jpg',
	'imagesmain/adizerosl2.jpg',
    'imagesmain/adizerosl3.jpg',
    'imagesmain/adizerosl4.jpg',
    'imagesmain/adizerosl5.jpg',
    'imagesmain/adizerosl6.jpg',
    'imagesmain/adizerosl7.jpg',
    'imagesmain/adizerosl8.jpg',
	'imagesmain/adizerosl9.jpg',
	'imagesmain/adizerosl10.jpg',
	'imagesmain/adizerosl11.jpg',
	'imagesmain/adizerosl12.jpg',
	'imagesmain/adizerosl13.jpg',
	'imagesmain/adizerosl14.jpg',
	'imagesmain/adizerosl15.jpg'
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