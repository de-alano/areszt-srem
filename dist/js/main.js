// HAMBURGER MENU
const menuIcon = document.querySelector('.header__hamburger');
const nav = document.querySelector('.mobile-navigation');
const navLinks = [...document.querySelectorAll('.mobile-navigation__link')];

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    nav.classList.toggle('change');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('change');
        menuIcon.classList.remove('change');
    });
});
