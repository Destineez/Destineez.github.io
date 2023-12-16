// catalog.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the search input and search button
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-button');

    // Get all item boxes
    const itemBoxes = document.querySelectorAll('.item-box');

    // Event listener for the "Go" button
    searchButton.addEventListener('click', filterItems);

    // Event listener for the Enter key
    searchInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            filterItems();
        }
    });

    function filterItems() {
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through all item boxes
        itemBoxes.forEach(function (box) {
            const itemDescription = box.querySelector('.item-description').textContent.toLowerCase();

            // Check if the search term is in the item description
            if (itemDescription.includes(searchTerm)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    }
});