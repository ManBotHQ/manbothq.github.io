console.log("🧬 ManBot Site Initialized");

// Navbar sticky offset for smooth scroll
const navbar = document.querySelector('.navbar');
const setScrollPadding = () => {
    const navbarHeight = navbar?.offsetHeight || 0;
    document.documentElement.style.scrollPaddingTop = navbarHeight + 'px';
};
window.addEventListener('resize', setScrollPadding);
setScrollPadding();

// Mobile Menu Logic
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();

        // Close mobile menu if open
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .visible { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);

    document.querySelectorAll('.feature-card, .notion-block, .hero-content, .dashboard-preview').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
