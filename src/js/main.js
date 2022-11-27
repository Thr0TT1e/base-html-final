import * as bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.css';
import '../sass/main.sass';
import * as bootstrap from 'bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ymaps from 'ymaps';

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

  const swiperProjects = new Swiper('.projects__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      nextEl: '.projects__next',
      prevEl: '.projects__prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 33.97,
        slidesPerGroup: 2,
      },
      1008: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },
      1750: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  ymaps.load().then((maps) => {
    const map = new maps.Map('loadMap', {
      center: [55.760109, 37.591952],
      zoom: 14,
      controls: [],
    });

    const placemark = new maps.Placemark(
      [55.760109, 37.591952],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: 'image/map/placemark.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-2, -40],
      }
    );

    map.controls
      .add('zoomControl', {
        float: 'none',
        position: {
          right: 11,
          top: 300,
        },
      })
      .add('geolocationControl', {
        float: 'none',
        position: {
          right: 11,
          top: 380,
        },
      });

    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom');
  });
});
