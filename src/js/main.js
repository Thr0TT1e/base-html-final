import * as bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.css?inline';
import '../sass/main.sass';
import * as bootstrap from 'bootstrap';
import Choices from 'choices.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ymaps from 'ymaps';

document.addEventListener('DOMContentLoaded', function () {
  // header - burger
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

  // gallery - select
  const choiceGallery = new Choices('#gallery__select', {
    searchEnabled: false,
    position: 'bottom',
  });

  // swiper
  const swiper = new Swiper('.gallery__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // spaceBetween: 50,
    loop: false,
    navigation: {
      nextEl: '.gallery__swiper-button-next',
      prevEl: '.gallery__swiper-button-prev',
    },
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 38,
        slidesPerGroup: 2,
      },
      1008: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1760: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
  });

  const swiperDoings = new Swiper('.doings__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: false,
    navigation: {
      nextEl: '.doings__swiper-button-next',
      prevEl: '.doings__swiper-button-prev',
    },
    pagination: {
      el: '.doings__swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      687: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 3,
      },
      1761: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },
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
        iconImageHref: './image/map/placemark.svg',
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
