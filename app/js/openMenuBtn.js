const openMenuBtn = document.querySelector('.header__btn');
// const mobileMenu = document.querySelector('.header__menu');
const mobileMenu = document.querySelector('.header');

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('header__btn-closed');
    // mobileMenu.classList.toggle('mob-menu--opened')
    mobileMenu.classList.toggle('opened')
})