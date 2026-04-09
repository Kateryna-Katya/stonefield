import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
let coreSwiper = null;
let gallerySwiper = null;

function initSwipers() {
  const width = window.innerWidth;

  // ---------------- CORE ----------------
  if (width < 1440 && !coreSwiper) {
    coreSwiper = new Swiper('.core-swiper', {
      modules: [Autoplay],
      slidesPerView: 1.5,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  if (width >= 1440 && coreSwiper) {
    coreSwiper.destroy(true, true);
    coreSwiper = null;
  }

  // ---------------- GALLERY ----------------
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 3.3,
          spaceBetween: 24,
        }
      }
    });
  }
}

initSwipers();

window.addEventListener('resize', () => {
  initSwipers();
});