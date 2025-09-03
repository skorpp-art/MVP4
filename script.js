document.addEventListener('DOMContentLoaded', () => {
    // --- CACHE ELEMENTS ---
    const mainContent = document.querySelector('main');
    const searchBar = document.getElementById('search-bar');
    const searchResultsContainer = document.getElementById('search-results');
    const allMenuItems = Array.from(document.querySelectorAll('.menu-item'));

    // --- CAROUSEL LOGIC ---
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const dotsContainer = document.querySelector('.carousel-dots');
    let dots = [];

    if (slides.length > 0) {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => showSlide(i));
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        function updateDots(n) {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === n);
            });
        }

        function showSlide(n) {
            // Adjust for negative indices
            const newIndex = (n + slides.length) % slides.length;
            slides.forEach(slide => slide.style.display = 'none');
            slides[newIndex].style.display = 'block';
            currentSlide = newIndex;
            updateDots(newIndex);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
        setInterval(nextSlide, 5000);
        showSlide(currentSlide); // Show initial slide
    }

    // --- SEARCH LOGIC ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        searchResultsContainer.innerHTML = '';

        if (searchTerm) {
            mainContent.style.display = 'none';
            searchResultsContainer.style.display = 'block';

            const filteredItems = allMenuItems.filter(item => {
                const title = item.querySelector('h3').textContent.toLowerCase();
                const description = item.querySelector('.menu-item-description').textContent.toLowerCase();
                return title.includes(searchTerm) || description.includes(searchTerm);
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
        }
    });

    // --- SMOOTH SCROLLING ---
    const navLinks = document.querySelectorAll('.bottom-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
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
        const description = menuItemElement.querySelector('.menu-item-description').textContent;
        const imageSrc = menuItemElement.querySelector('.menu-item-image').src;
        const suggestions = menuItemElement.dataset.suggestions ? menuItemElement.dataset.suggestions.split(',') : [];

        // Populate modal
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = imageSrc;
        modalImage.style.display = 'block';

        const suggestionsContainer = modalSuggestions.parentElement;
        modalSuggestions.innerHTML = '';
        if (suggestions.length > 0 && suggestions[0]) {
            suggestions.forEach(suggestionText => {
                const li = document.createElement('li');
                li.textContent = suggestionText.trim();
                modalSuggestions.appendChild(li);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }

        modal.style.display = 'block';
    }

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