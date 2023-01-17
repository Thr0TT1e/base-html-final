import 'normalize.css';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import ymaps from 'ymaps';
import Inputmask from 'inputmask';
import JustValidate from 'just-validate';
import '../sass/main.sass';

document.addEventListener('DOMContentLoaded', () => {
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

  document.querySelector('#burger-close').addEventListener('click', () => {
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

  // header bottom menu
  document.querySelectorAll('.header__btn-tab').forEach((item) => {
    item.addEventListener('click', function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector('.header__tab-dropdown');

      document.querySelectorAll('.header__btn-tab').forEach((el) => {
        if (el !== btn) {
          el.classList.remove('active-btn');
        }
      });

      document.querySelectorAll('.header__tab-dropdown').forEach((el) => {
        if (el !== dropdown) {
          el.classList.remove('active-dropdown');
        }
      });

      dropdown.classList.toggle('active-dropdown');
      btn.classList.toggle('active-btn');
    });

    document.addEventListener('click', (e) => {
      let target = e.target;
      if (!target.closest('.header__bottom-list')) {
        document.querySelectorAll('.header__tab-dropdown').forEach((el) => {
          el.classList.remove('active-dropdown');
        });
        document.querySelectorAll('.header__btn-tab').forEach((el) => {
          el.classList.remove('active-btn');
        });
      }
    });
  });

  // gallery
  const elementGallery = document.querySelector('#gallery__select');
  const choiceGallery = new Choices(elementGallery, {
    searchEnabled: false,
    position: 'bottom',
    allowHTML: true,
  });

  // swiper - gallery
  const swiperGallery = new Swiper('.gallery__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
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

  // swiper - events
  const swiperEvents = new Swiper('.events__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: false,
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
    },
    pagination: {
      el: '.events__swiper-pagination',
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

  // catalog - accordion
  console.log('🚀 ~ file: main.js:18 ~ $', $);
  // $(function () {
  $('.accordion').accordion({
    heightStyle: 'content',
    active: false,
    collapsible: true,
    animate: 500,
  });
  // });

  document.querySelectorAll('.catalog__item-top').forEach((el) => {
    el.addEventListener('mousedown', (e) => e.preventDefault());
  });

  // tab
  document.querySelectorAll('.catalog__bottom-btn').forEach((tabsBtn) => {
    tabsBtn.addEventListener('click', (e) => {
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__bottom-btn').forEach((btn) => {
        btn.classList.remove('catalog__bottom-btn-active');
      });

      e.currentTarget.classList.add('catalog__bottom-btn-active');

      document.querySelectorAll('.catalog__content-info').forEach((tabsBtn) => {
        tabsBtn.classList.remove('catalog__content-info-active');
      });

      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add('catalog__content-info-active');
    });
  });

  // swiper - projects
  const swiperProjects = new Swiper('.projects__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: false,
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
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
    const map = new maps.Map('map', {
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

  // contacts - form
  const inputTel = document.querySelector("input[type='tel']");

  Inputmask({
    mask: '+7 (999) 999-99-99',
  }).mask(inputTel);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Недопустимый формат',
        strength: 'Недопустимый формат',
      },
      tel: {
        required: 'Укажите ваш телефон',
        function: 'Недопустимый формат',
      },
    },
  });
});
