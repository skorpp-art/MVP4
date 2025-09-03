document.addEventListener('DOMContentLoaded', () => {
    // --- CACHE ELEMENTS ---
    const mainContent = document.querySelector('main');
    const searchBar = document.getElementById('search-bar');
    const clearSearchButton = document.querySelector('.clear-search');
    const searchResultsContainer = document.getElementById('search-results');
    const allMenuItems = Array.from(document.querySelectorAll('.menu-item'));

    // --- CAROUSEL LOGIC ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    if (slides.length > 0) {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        function showSlide(n) {
            slides.forEach(slide => slide.style.display = 'none');
            slides[n].style.display = 'block';
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextButton.addEventListener('click', nextSlide);
        setInterval(nextSlide, 5000);
        showSlide(currentSlide); // Show initial slide
    }

    // --- SEARCH LOGIC ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchResultsContainer.innerHTML = ''; // Clear previous results

        if (searchTerm) {
            mainContent.style.display = 'none';
            searchResultsContainer.style.display = 'block';
            clearSearchButton.classList.add('active');

            const filteredItems = allMenuItems.filter(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                return title.includes(searchTerm);
            });

            if (filteredItems.length > 0) {
                filteredItems.forEach(item => {
                    searchResultsContainer.appendChild(item.cloneNode(true));
                });
            } else {
                searchResultsContainer.innerHTML = '<p>No se encontraron platos.</p>';
            }

        } else {
            mainContent.style.display = 'block';
            searchResultsContainer.style.display = 'none';
            clearSearchButton.classList.remove('active');
        }
    });

    clearSearchButton.addEventListener('click', () => {
        searchBar.value = '';
        searchBar.dispatchEvent(new Event('input')); // Trigger the input event to reset the view
        searchBar.focus();
    });


    // --- SMOOTH SCROLLING ---
    const navLinks = document.querySelectorAll('.bottom-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // If search is active, first clear it
            if (searchBar.value) {
                searchBar.value = '';
                searchBar.dispatchEvent(new Event('input'));
            }
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- MODAL LOGIC (WITH EVENT DELEGATION) ---
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalSuggestions = document.getElementById('modal-suggestions');
    const closeButton = document.querySelector('.close-button');

    function openModal(menuItemElement) {
        const title = menuItemElement.querySelector('h3').textContent;
        const description = menuItemElement.dataset.description;
        const suggestions = menuItemElement.dataset.suggestions.split(',');
        const imageSrc = menuItemElement.dataset.image;

        // Image
        if (imageSrc) {
            modalImage.src = imageSrc;
            modalImage.style.display = 'block';
        } else {
            modalImage.style.display = 'none';
        }

        // Text content
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // Suggestions
        modalSuggestions.innerHTML = '';
        suggestions.forEach(suggestionText => {
            const li = document.createElement('li');
            li.textContent = suggestionText.trim();
            modalSuggestions.appendChild(li);
        });

        modal.style.display = 'block';
    }

    // Listen for clicks on the body to handle both original items and search results
    document.body.addEventListener('click', (e) => {
        const menuItem = e.target.closest('.menu-item');
        if (menuItem) {
            openModal(menuItem);
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
