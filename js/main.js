const init = (() => {
    /* ------------------------------------------------------------------------------------------------------------------------------------------------ */
    /* ------------------------------------------------------------------------------------------------------------------------------------------------ */
    // Initialize Swiper
    const breakpoint = window.matchMedia('(min-width:56.25em)');
    // Keep track of swiper instances to destroy later
    let mySwiper;
    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            return enableSwiper();
        } else if (breakpoint.matches === false) {
            if (mySwiper !== undefined) mySwiper.destroy(true, true); // Destroy swiper on mobile
            return;
        }
    };

    const enableSwiper = function () {
        mySwiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: false,
            speed: 1000,
            mousewheel: true,
            keyboard: {
                enabled: true,
            },
            pagination: {
                el: '.swiper-pagination-h',
                renderBullet: function (index, className) {
                    var section = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-section');
                    return '<span class="' + className + '">' + section + '</span>';
                },
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    };

    // Keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // Kickstart
    breakpointChecker();

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

})();