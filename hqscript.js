// Get the navigation element
const nav = document.querySelector('nav');

// Variable to store the last scroll position
let lastScrollY = window.scrollY;

// Listen for the 'scroll' event
window.addEventListener('scroll', () => {
    // Check if the current scroll position is greater than the last one (scrolling down)
    if (lastScrollY < window.scrollY) {
        // Scrolling Down - Add the 'nav-hidden' class
        nav.classList.add('nav-hidden');
    } else {
        // Scrolling Up - Remove the 'nav-hidden' class
        nav.classList.remove('nav-hidden');
    }

    // Update the last scroll position
    lastScrollY = window.scrollY;
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Prevents the default action of the link
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth' // This enables the smooth animation
            });
        }
    });
});

// footer
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Optimisation des animations
let footerLastScrollY = 0;
let ticking = false;

window.addEventListener('scroll', () => {
    footerLastScrollY = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Ici vous pourriez ajouter d'autres animations en fonction du scroll
            ticking = false;
        });

        ticking = true;
    }
});

// Chargement différé des éléments non critiques
document.addEventListener('DOMContentLoaded', function () {
    if ('IntersectionObserver' in window) {
        const lazyElements = document.querySelectorAll('.lazy');

        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyElement = entry.target;
                    // Charger les éléments ici
                    lazyObserver.unobserve(lazyElement);
                }
            });
        });

        lazyElements.forEach((lazyElement) => {
            lazyObserver.observe(lazyElement);
        });
    }
});