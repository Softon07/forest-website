const burgerBtn = document.querySelector('.nav-mobile__burger-btn');
const mobileMenu = document.querySelector('.nav-mobile-menu');
const navMobileItems = document.querySelectorAll('.nav-mobile__item');
const footYear = document.querySelector('.footer__year');

const toggleNav = () => {
    mobileMenu.classList.toggle('nav-mobile-menu--active');
}

navMobileItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('nav-mobile-menu--active');
    })
})

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footYear.innerText = `${year} Forest Group Company Ltd.`;
}

handleCurrentYear();

burgerBtn.addEventListener('click', toggleNav);