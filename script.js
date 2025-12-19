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

// Toggle para detalhes da pousada (expandir / retrair)
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-pousada');
    const details = document.getElementById('pousada-details');
    if (!toggleBtn || !details) return;

    toggleBtn.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
            details.hidden = true;
            this.textContent = 'Mais detalhes';
        } else {
            details.hidden = false;
            this.textContent = 'Menos detalhes';
            details.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Toggles para cada quarto (botões 'Exibir mais informações')
    const roomToggles = document.querySelectorAll('.room-toggle');
    roomToggles.forEach((btn) => {
        const detailsId = btn.getAttribute('aria-controls');
        const detailsEl = document.getElementById(detailsId);
        if (!detailsEl) return;

        btn.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!expanded));
            if (expanded) {
                detailsEl.hidden = true;
                this.textContent = 'Exibir mais informações';
            } else {
                detailsEl.hidden = false;
                this.textContent = 'Menos informações';
                detailsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
