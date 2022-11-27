import * as bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.css';
import * as bootstrap from 'bootstrap';
import '../sass/main.sass';

document.addEventListener('DOMContentLoaded', function () {
  // header

  // burger

  const openBurgerMenuHandler = () => {
    document.querySelector('#mobile-menu').classList.add('is-active-burger');
    document.querySelector('html').style.overflow = 'hidden';
  };

  const closeBurgerHandler = () => {
    document.querySelector('#mobile-menu').classList.remove('is-active-burger');
    document.querySelector('html').style.overflow = 'unset';
  };

  document.querySelector('#burger').addEventListener('click', (e) => {
    openBurgerMenuHandler();
  });

  document.querySelector('#burger--close').addEventListener('click', () => {
    closeBurgerHandler();
  });

  document.querySelectorAll('.header__link-mobile').forEach((link) => {
    link.addEventListener('click', () => {
      closeBurgerHandler();
    });
  });

  document.querySelectorAll('.header__link-mobile').forEach((link) => {
    link.addEventListener('click', () => {
      document
        .querySelector('#mobile-menu')
        .classList.remove('is-active-burger');
    });
  });

  // search

  const openSearchHandler = () => {
    document.querySelector('#search-open').classList.toggle('search-active');
    document.querySelector('#search-btn').classList.toggle('search-active');
  };

  document.querySelector('#search-btn').addEventListener('click', function () {
    openSearchHandler();
  });
  document
    .querySelector('#search-close')
    .addEventListener('click', function () {
      openSearchHandler();
    });
});
