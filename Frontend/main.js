// main.js General functionality for header language selection
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.querySelector('.language-selector select');
    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        window.location.href = `${window.location.pathname}?lang=${selectedLanguage}`;
    });
});

// hero-slideshow.js Slideshow functionality for the hero section
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// contact.js 
//Interactive map setup
function initMap() {
    const location = { lat: 18.5204, lng: 73.8567 }; // Example: Pune, India coordinates
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load the map when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('map')) {
        initMap();
    }
});

// event-details.js Expandable sections for event details
document.addEventListener('DOMContentLoaded', () => {
    const eventSections = document.querySelectorAll('.event-detail');
    eventSections.forEach(section => {
        const toggleButton = section.querySelector('.toggle-details');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                const details = section.querySelector('.details-content');
                if (details.style.display === 'block') {
                    details.style.display = 'none';
                    toggleButton.textContent = 'Show More';
                } else {
                    details.style.display = 'block';
                    toggleButton.textContent = 'Show Less';
                }
            });
        }
    });
});

// event-list.js Link handling for event navigation
document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.dataset.eventId;
            window.location.href = `event-details.html?id=${eventId}`;
        });
    });
});

// responsive-nav.js Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

/* Auto Slide Show JavaScript Integration */
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}




function performSearch() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const searchDatabase = [
        { title: "Home", url: "index.html" },
        { title: "Events", url: "event-list.html" },
        { title: "About Us", url: "about.html" },
        { title: "Our Team", url: "team.html" },
        { title: "Contact", url: "contact.html" },
        { title: "Join Us", url: "login-registration.html" },
        { title: "Our Work", url: "https://kwikpic-in.app.link/qpvawbItTOb?groupCode=HZANGV" } // Add the Our Work link here
    ];

    // Check for the specific search term "our work"
    if (searchQuery === "our work") {
        window.location.href = "https://kwikpic-in.app.link/qpvawbItTOb?groupCode=HZANGV"; // Redirect to Our Work link
        return;
    }

    const result = searchDatabase.find(page => page.title.toLowerCase().includes(searchQuery));

    if (result) {
        // Redirect to the found page
        window.location.href = result.url;
    } else {
        // Display alert if no match is found
        alert("No matching pages found.");
    }
}