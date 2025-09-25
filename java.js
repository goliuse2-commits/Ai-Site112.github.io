// ??????? ??????
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        alert('???? ?????, ??????? ????? ??? ??????');
        return;
    }
    
    // ??????? ????? ?? ???????? ????????
    const pageText = document.body.innerText.toLowerCase();
    
    if (pageText.includes(searchTerm)) {
        // ????????? ?? ??????? ?????????? ????????
        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, div');
        for (let element of elements) {
            if (element.innerText.toLowerCase().includes(searchTerm)) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // ??????? ?????????????
                element.style.backgroundColor = '#ffffcc';
                setTimeout(() => {
                    element.style.backgroundColor = '';
                }, 2000);
                break;
            }
        }
    } else {
        alert('?????? ?? ???????? ?? ???????: ' + searchTerm);
    }
}

// ??????? ?????????? Enter ? ???? ??????
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// ??????? ??? ?????? "???????? ???"
function sayHello() {
    const name = prompt('?? ?? ??? ???????????', '');
    if (name) {
        alert(`???????, ${name}! ?? ??'??????? ? ???? ?????????? ?????.`);
    }
}

// ?????? ????????? ??? ???????????? ????????
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ??????? ????? ??? ??????
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        header.style.background = 'rgba(255,255,255,0.95)';
    } else {
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        header.style.background = '#fff';
    }
});

// ???????? ?????? ??? ??????
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ???????????? ???????? ?? ??????
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

console.log('???? ??? ??????? ???????? ???????????!');
// Лічильник відвідувачів (локальний)
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount = parseInt(visitorCount) + 1;
localStorage.setItem('visitorCount', visitorCount);

// Функція для відображення лічильника в шапці
function addVisitorCounter() {
    const counterElement = document.createElement('div');
    counterElement.className = 'visitor-counter';
    counterElement.innerHTML = `👥 Відвідувачі: <span>${visitorCount}</span>`;
    
    // Додаємо в шапку
    const header = document.querySelector('header .header-content');
    header.appendChild(counterElement);
}

// Викликаємо після завантаження сторінки
document.addEventListener('DOMContentLoaded', addVisitorCounter);