// PRELOADER - OPTIONS
window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader');
    setTimeout(() => {
        preloader.classList.add('loader-finish');
    }, 2000);
});