const darkBtn = document.getElementById('darkBtn');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
    currentPage = "index.html";
}

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (linkPath === currentPage) {
        
        link.classList.add('active');
    }
});