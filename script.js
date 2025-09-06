document.addEventListener('DOMContentLoaded', () => {
    const menu = {
        especiales: [
            { name: "Hamburguesa de la casa", description: "Pan brioche, blend de carne, queso cheddar, cebolla caramelizada y panceta.", price: "$15.00", image: "Hamburguesa de la casa.png", type: "food" },
            { name: "Ravioles de espinaca y ricota", description: "Con salsa de crema y nueces.", price: "$18.00", image: "Ravioles de espinaca y ricota.png", type: "food" },
            { name: "Curry de pollo", description: "Trozos de pollo en una salsa de coco y curry con arroz basmati.", price: "$17.00", image: "Curry de pollo.png", type: "food" },
            { name: "Parrillada completa", description: "Selección de carnes a la parrilla para compartir, con variedad de guarniciones.", price: "$35.00", image: "Parrillada completa.png", type: "food" },
            { name: "Pulpo a la gallega", description: "Pulpo tierno con papas, pimentón y aceite de oliva.", price: "$25.00", image: "Pulpo a la gallega.png", type: "food" }
        ],
        entradas: [
            { name: "Empanadas de carne", description: "Rellenas con carne cortada a cuchillo, huevo y aceitunas.", price: "$8.00", image: "Empanadas de carne.png", type: "food" },
            { name: "Bruschetta de tomate", description: "Pan tostado con tomate fresco, albahaca y aceite de oliva.", price: "$7.50", image: "Bruschetta de tomate.png", type: "food" },
            { name: "Bastones de muzzarella", description: "Servidos con salsa de tomate casera.", price: "$9.00", image: "Bastones de muzzarella.png", type: "food" },
            { name: "Tabla de fiambres y quesos", description: "Selección de quesos y embutidos locales.", price: "$12.00", image: "Tabla de fiambres y quesos.png", type: "food" },
            { name: "Sopa de calabaza", description: "Crema suave de calabaza con un toque de jengibre.", price: "$6.50", image: "Sopa de calabaza.png", type: "food" }
        ],
        principal: [
            { name: "Ojo de bife a la parrilla", description: "Jugoso corte de carne con papas rústicas y chimichurri.", price: "$25.00", image: "Ojo de bife a la parrilla.png", type: "food" },
            { name: "Salmón a la plancha", description: "Con vegetales asados y un toque de limón.", price: "$28.00", image: "Salmón a la plancha.png", type: "food" },
            { name: "Risotto de hongos", description: "Cremoso risotto con champiñones frescos y un toque de parmesano.", price: "$22.00", image: "Risotto de hongos.png", type: "food" },
            { name: "Milanesa napolitana", description: "Milanesa de ternera cubierta con jamón, queso y salsa de tomate.", price: "$23.00", image: "Milanesa napolitana.png", type: "food" },
            { name: "Lasagna vegetariana", description: "Capas de pasta, vegetales de estación y salsa bechamel.", price: "$21.00", image: "Lasagna vegetariana.png", type: "food" }
        ],
        bebidas: {
            alcoholicas: {
                cervezas: [
                    { name: "Cerveza 1", description: "Descripción de la Cerveza 1.", price: "$5.00", image: "bebida1.png", type: "drink" },
                    { name: "Cerveza 2", description: "Descripción de la Cerveza 2.", price: "$5.50", image: "bebida2.png", type: "drink" },
                    { name: "Cerveza 3", description: "Descripción de la Cerveza 3.", price: "$6.00", image: "bebida3.png", type: "drink" },
                    { name: "Cerveza 4", description: "Descripción de la Cerveza 4.", price: "$6.50", image: "bebida4.png", type: "drink" },
                    { name: "Cerveza 5", description: "Descripción de la Cerveza 5.", price: "$7.00", image: "bebida5.png", type: "drink" }
                ],
                vinos: [
                    { name: "Vino 1", description: "Descripción del Vino 1.", price: "$8.00", image: "bebida1.png", type: "drink" },
                    { name: "Vino 2", description: "Descripción del Vino 2.", price: "$8.50", image: "bebida2.png", type: "drink" },
                    { name: "Vino 3", description: "Descripción del Vino 3.", price: "$9.00", image: "bebida3.png", type: "drink" },
                    { name: "Vino 4", description: "Descripción del Vino 4.", price: "$9.50", image: "bebida4.png", type: "drink" },
                    { name: "Vino 5", description: "Descripción del Vino 5.", price: "$10.00", image: "bebida5.png", type: "drink" }
                ],
                tragos: [
                    { name: "Trago 1", description: "Descripción del Trago 1.", price: "$12.00", image: "bebida1.png", type: "drink" },
                    { name: "Trago 2", description: "Descripción del Trago 2.", price: "$12.50", image: "bebida2.png", type: "drink" },
                    { name: "Trago 3", description: "Descripción del Trago 3.", price: "$13.00", image: "bebida3.png", type: "drink" },
                    { name: "Trago 4", description: "Descripción del Trago 4.", price: "$13.50", image: "bebida4.png", type: "drink" },
                    { name: "Trago 5", description: "Descripción del Trago 5.", price: "$14.00", image: "bebida5.png", type: "drink" }
                ]
            },
            noAlcoholicas: {
                bebidasFrias: {
                    gaseosas: [
                        { name: "Gaseosa 1", description: "Descripción de la Gaseosa 1.", price: "$3.00", image: "bebida1.png", type: "drink" },
                        { name: "Gaseosa 2", description: "Descripción de la Gaseosa 2.", price: "$3.00", image: "bebida2.png", type: "drink" },
                        { name: "Gaseosa 3", description: "Descripción de la Gaseosa 3.", price: "$3.00", image: "bebida3.png", type: "drink" },
                        { name: "Gaseosa 4", description: "Descripción de la Gaseosa 4.", price: "$3.00", image: "bebida4.png", type: "drink" },
                        { name: "Gaseosa 5", description: "Descripción de la Gaseosa 5.", price: "$3.00", image: "bebida5.png", type: "drink" }
                    ],
                    jugos: [
                        { name: "Jugo 1", description: "Descripción del Jugo 1.", price: "$4.00", image: "bebida1.png", type: "drink" },
                        { name: "Jugo 2", description: "Descripción del Jugo 2.", price: "$4.00", image: "bebida2.png", type: "drink" },
                        { name: "Jugo 3", description: "Descripción del Jugo 3.", price: "$4.00", image: "bebida3.png", type: "drink" },
                        { name: "Jugo 4", description: "Descripción del Jugo 4.", price: "$4.00", image: "bebida4.png", type: "drink" },
                        { name: "Jugo 5", description: "Descripción del Jugo 5.", price: "$4.00", image: "bebida5.png", type: "drink" }
                    ]
                },
                bebidasCalientes: {
                    cafe: [
                        { name: "Café 1", description: "Descripción del Café 1.", price: "$2.50", image: "bebida1.png", type: "drink" },
                        { name: "Café 2", description: "Descripción del Café 2.", price: "$2.50", image: "bebida2.png", type: "drink" },
                        { name: "Café 3", description: "Descripción del Café 3.", price: "$3.00", image: "bebida3.png", type: "drink" },
                        { name: "Café 4", description: "Descripción del Café 4.", price: "$3.50", image: "bebida4.png", type: "drink" },
                        { name: "Café 5", description: "Descripción del Café 5.", price: "$4.00", image: "bebida5.png", type: "drink" }
                    ]
                }
            }
        },
        postres: [
            { name: "Volcán de chocolate", description: "Pastel tibio con centro líquido, acompañado de helado de vainilla.", price: "$8.50", image: "Volcán de chocolate.png", type: "food" },
            { name: "Tiramisú clásico", description: "Postre italiano con bizcochos de soletilla, café y crema de mascarpone.", price: "$7.50", image: "Tiramisú clásico.png", type: "food" },
            { name: "Panqueques con dulce de leche", description: "Dos panqueques caseros con abundante dulce de leche.", price: "$7.50", image: "Panqueques con dulce de leche.png", type: "food" },
            { name: "Cheesecake de frutos rojos", description: "Base de galletas, suave crema de queso y salsa de frutos rojos.", price: "$9.50", image: "Cheesecake de frutos rojos.png", type: "food" },
            { name: "Helado artesanal", description: "Dos bochas a elección entre los sabores del día.", price: "$5.00", image: "Helado artesanal.png", type: "food" }
        ]
    };

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

            const filteredItems = [];
            for (const category in menu) {
                if (Array.isArray(menu[category])) {
                    menu[category].forEach(item => {
                        if (item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)) {
                            filteredItems.push(item);
                        }
                    });
                } else {
                    for (const subCategory in menu[category]) {
                        for (const nestedSubCategory in menu[category][subCategory]) {
                            menu[category][subCategory][nestedSubCategory].forEach(item => {
                                if (item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)) {
                                    filteredItems.push(item);
                                }
                            });
                        }
                    }
                }
            }

            if (filteredItems.length > 0) {
                filteredItems.forEach(item => {
                    const menuItemElement = document.createElement('div');
                    menuItemElement.classList.add('menu-item');
                    menuItemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                        <div class="menu-item-details">
                            <div class="menu-item-header">
                                <h3>${item.name}</h3>
                                <span class="price">${item.price}</span>
                            </div>
                            <p class="menu-item-description">${item.description}</p>
                        </div>
                    `;
                    searchResultsContainer.appendChild(menuItemElement);
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

    function findMenuItem(name) {
        for (const category in menu) {
            if (Array.isArray(menu[category])) {
                const foundItem = menu[category].find(item => item.name === name);
                if (foundItem) return foundItem;
            } else {
                for (const subCategory in menu[category]) {
                    for (const nestedSubCategory in menu[category][subCategory]) {
                        const foundItem = menu[category][subCategory][nestedSubCategory].find(item => item.name === name);
                        if (foundItem) return foundItem;
                    }
                }
            }
        }
        return null;
    }

    function getRandomItem(category) {
        const items = menu[category];
        return items[Math.floor(Math.random() * items.length)];
    }
    
    function openModal(menuItemElement) {
        const title = menuItemElement.querySelector('h3').textContent;
        const item = findMenuItem(title);

        if (item) {
            modalTitle.textContent = item.name;
            modalDescription.textContent = item.description;
            modalImage.src = item.image;
            modalImage.style.display = 'block';

            const suggestionsContainer = modalSuggestions.parentElement;
            modalSuggestions.innerHTML = '';
            
            let suggestions = [];
            if (item.type === 'food') {
                const allDrinks = [...menu.bebidas.alcoholicas.cervezas, ...menu.bebidas.alcoholicas.vinos, ...menu.bebidas.alcoholicas.tragos, ...menu.bebidas.noAlcoholicas.bebidasFrias.gaseosas, ...menu.bebidas.noAlcoholicas.bebidasFrias.jugos, ...menu.bebidas.noAlcoholicas.bebidasCalientes.cafe];
                const randomDrink = allDrinks[Math.floor(Math.random() * allDrinks.length)];
                const randomEntrada = getRandomItem('entradas');
                suggestions.push(`Bebida: ${randomDrink.name}`);
                suggestions.push(`Entrada: ${randomEntrada.name}`);
            } else if (item.type === 'drink') {
                const randomPrincipal = getRandomItem('principal');
                const randomEntrada = getRandomItem('entradas');
                suggestions.push(`Plato Principal: ${randomPrincipal.name}`);
                suggestions.push(`Entrada: ${randomEntrada.name}`);
            }

            if (suggestions.length > 0) {
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

    // --- TABS LOGIC ---
    function openCategory(evt, categoryName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(categoryName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    function openSubCategory(evt, subCategoryName) {
        var i, subtabcontent, subtablinks;
        subtabcontent = evt.currentTarget.parentElement.parentElement.getElementsByClassName("sub-tab-content");
        for (i = 0; i < subtabcontent.length; i++) {
            subtabcontent[i].style.display = "none";
        }
        subtablinks = evt.currentTarget.parentElement.getElementsByClassName("sub-tab-link");
        for (i = 0; i < subtablinks.length; i++) {
            subtablinks[i].className = subtablinks[i].className.replace(" active", "");
        }
        document.getElementById(subCategoryName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    function openNestedSubCategory(evt, nestedSubCategoryName) {
        var i, nestedsubtabcontent, nestedsubtablinks;
        nestedsubtabcontent = evt.currentTarget.parentElement.parentElement.getElementsByClassName("nested-sub-tab-content");
        for (i = 0; i < nestedsubtabcontent.length; i++) {
            nestedsubtabcontent[i].style.display = "none";
        }
        nestedsubtablinks = evt.currentTarget.parentElement.getElementsByClassName("nested-sub-tab-link");
        for (i = 0; i < nestedsubtablinks.length; i++) {
            nestedsubtablinks[i].className = nestedsubtablinks[i].className.replace(" active", "");
        }
        document.getElementById(nestedSubCategoryName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Add event listeners to tab buttons
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.currentTarget.getAttribute('onclick').split("'")[1];
            openCategory(e, category);
        });
    });

    const subTabLinks = document.querySelectorAll('.sub-tab-link');
    subTabLinks.forEach(button => {
        button.addEventListener('click', (e) => {
            const subCategory = e.currentTarget.getAttribute('onclick').split("'")[1];
            openSubCategory(e, subCategory);
        });
    });

    const nestedSubTabLinks = document.querySelectorAll('.nested-sub-tab-link');
    nestedSubTabLinks.forEach(button => {
        button.addEventListener('click', (e) => {
            const nestedSubCategory = e.currentTarget.getAttribute('onclick').split("'")[1];
            openNestedSubCategory(e, nestedSubCategory);
        });
    });

    // Open the default tabs
    document.querySelector('.tab-link.active').click();
    document.querySelector('.sub-tab-link.active').click();
    document.querySelector('.nested-sub-tab-link.active').click();
});
