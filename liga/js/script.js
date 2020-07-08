

const btn = document.querySelector('.header__toggle');
const nav = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const body = document.querySelector('body');

let btnOnClick = function() {
  event.preventDefault();

  body.classList.toggle('menu--opened');
  header.classList.toggle('header__menu--closed');
  nav.classList.toggle('show');
  header.classList.toggle('header__menu--openned');
}

btn.addEventListener('click', btnOnClick);

function toggleTheme(theme) {
  body.classList.remove('dark', 'light')
  if (theme == 'dark') {
      body.classList.add('dark')
  } else {
      body.classList.add('light')
  }
}

const input = document.querySelector('.input');
input.addEventListener('click', function () {
  body.classList.remove('dark', 'light');
  if (input.checked) {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
})