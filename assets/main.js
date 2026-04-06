document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Shadow Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 2. Scroll Reveal Effect (Intersection Observer ile)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Sadece bir kere animasyon oynasın istersen alttaki satırı açabilirsin:
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Elemanın %15'i göründüğünde tetikle
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});