const homeLink = document.querySelector('.home-link');
const aboutLink = document.querySelector('.about-link');
const offerLink = document.querySelector('.offer-link');
const contactLink = document.querySelector('.contact-link');

const links = [homeLink, aboutLink, offerLink, contactLink];

const setActiveNavItem = () => {
    const scrollPosition = window.scrollY;
    let activeLink = null;
    switch (true) {
        case scrollPosition < 380:
            activeLink = homeLink;
            break;
        case scrollPosition >= 380 && scrollPosition < 1249:
            activeLink = aboutLink;
            break;
        case scrollPosition >= 1249:
            activeLink = offerLink;
            break;
        default:
            activeLink = null;
    }
    links.forEach(link => link.classList.remove('active'));
    if (activeLink) {
        activeLink.classList.add('active');
    }
};

contactLink.addEventListener('click', () => {
    links.forEach(link => link.classList.remove('active'));
    contactLink.classList.add('active');
});

window.addEventListener('scroll', setActiveNavItem);