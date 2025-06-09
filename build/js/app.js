let menuToggle = document.querySelector('.header__toggle');
let navMenu = document.querySelector('.navegacion__menu');

menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('header__toggle--activo');
    navMenu.classList.toggle('navegacion__menu--activo');
});

let logosTech = document.getElementById('slider-tech').cloneNode(true);
document.getElementById('logos-tech').appendChild(logosTech);

let logosTools = document.getElementById('slider-tools').cloneNode(true);
document.getElementById('logos-tools').appendChild(logosTools);
