// fashionradar.js

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function redirectToCatalog() {
        const searchTerm = document.getElementById('search').value.trim();
        
        window.location.href = 'catalog.html?search=' + encodeURIComponent(searchTerm);
    }
	
document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.item-section2 .carousel-container');
    const flexContainer = document.querySelector('.item-section2 .flex-container');
    const itemBoxes = document.querySelectorAll('.item-section2 .item-box');

    const itemWidth = itemBoxes[0].offsetWidth;

    const clonedItems = Array.from(itemBoxes).map(item => item.cloneNode(true));
    clonedItems.forEach(item => flexContainer.appendChild(item));

    let position = 0;

    function scrollCarousel() {
        position -= itemWidth;

        if (position < -flexContainer.offsetWidth / 2) {
            position = 0;
        }

        flexContainer.style.transform = `translateX(${position}px)`;
        setTimeout(scrollCarousel, 3000); 
    }

    scrollCarousel();
});

// search.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('search');

    // Add event listener for form submission
    searchForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the search query
        const searchQuery = searchInput.value;

        // Redirect to catalog.html with the search query as a parameter
        window.location.href = `catalog.html?query=${encodeURIComponent(searchQuery)}`;
    });

    // Check if there's a search query in the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const storedQuery = urlParams.get('query');

    // If there's a stored query, populate the search input
    if (storedQuery) {
        searchInput.value = storedQuery;
    }
});
