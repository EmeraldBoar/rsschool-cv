const buttonElement = document.querySelector('.page-header__button');
const navigationElement = document.querySelector('.page-header__navigation');
buttonElement.addEventListener('click', () => {
  navigationElement.classList.toggle('page-header__navigation--open')
}
);
