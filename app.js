const nav = document.querySelector('.nav-open');
const burgerMenu = document.querySelector('.burger-menu');
const links = document.querySelectorAll('.nav-open .link ');
const html = document.querySelector('html');
const handelClick = () => {
  nav.classList.toggle('toggle');
  html.classList.toggle('no-scroll');
  burgerMenu.classList.toggle('rotate');
};

burgerMenu.addEventListener('click', handelClick);

links.forEach((lin) => {
  lin.addEventListener('click', handelClick);
});