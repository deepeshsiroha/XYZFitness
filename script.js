document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Animation for Navbar
    // Scroll Animation for Navbar using IntersectionObserver
    const navbar = document.querySelector('.navbar');
    const topSentinel = document.getElementById('top-sentinel');

    const navbarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // Sentinel is not visible (user scrolled down)
                navbar.classList.add('scrolled');
            } else {
                // Sentinel is visible (user at top)
                navbar.classList.remove('scrolled');
            }
        });
    }, { threshold: 0 });

    if (topSentinel) {
        navbarObserver.observe(topSentinel);
    }

    // Enhanced Intersection Observer
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove active class when element leaves viewport to re-trigger animation
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Select elements to animate
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
    });
});
