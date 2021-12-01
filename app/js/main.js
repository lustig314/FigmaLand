const burger = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.nav')

burger.addEventListener('click', () => {
  burger.classList.toggle('_active');
  navMenu.classList.toggle('_active');
})