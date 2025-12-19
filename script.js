// Smooth scroll para links de navegação
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

// Smooth scroll ao fazer scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.scrollY;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 8px 20px rgba(0, 102, 204, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 102, 204, 0.2)';
    }
    
    lastScrollTop = scrollTop;
});

// Adiciona animação ao carregar a página
window.addEventListener('load', function() {
    console.log('Bem-vindo ao Refúgio do Capitão! ⛵🏖️');
});
