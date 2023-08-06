const burgerBtn = document.querySelector('.nav-mobile__burger-btn');
const mobileMenu = document.querySelector('.nav-mobile-menu');
const navMobileItems = document.querySelectorAll('.nav-mobile__item');

const toggleNav = () => {
    mobileMenu.classList.toggle('nav-mobile-menu--active');
}

navMobileItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('nav-mobile-menu--active');
    })
})

burgerBtn.addEventListener('click', toggleNav);