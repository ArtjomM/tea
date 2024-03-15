const menubtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');

menubtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
});