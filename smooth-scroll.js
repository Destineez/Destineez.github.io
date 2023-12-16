// smooth-scroll.js

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);

      const delay = 500; 

      setTimeout(() => {
        window.location.href = targetId + 'Fashion Radar.html'; 
      }, delay);
    });
  });
});