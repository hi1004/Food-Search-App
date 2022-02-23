import gsap from 'gsap';

export default {
  namespaced: true,
  actions: {
    mouse() {
      cursorEffect();
    },
  },
};

function cursorEffect() {
  let mouseCursorContainer = document.querySelector('.cursor-container');
  let mouseCursor = document.querySelector('.cursor');
  let buttons = document.querySelectorAll('button');
  let swiperBtns = document.querySelectorAll('.swiper-btn');

  window.addEventListener('mousemove', cursor);

  function cursor(e) {
    gsap.to(mouseCursorContainer, 0.4, {
      x: e.clientX,
      y: e.clientY,
    });
  }

  // buttons.forEach(button => {
  //   button.addEventListener('mouseleave', () => {
  //     mouseCursor.classList.remove('link-grow');
  //     gsap.to(mouseCursor, 0.4, {
  //       scale: 1,
  //     });
  //   });

  //   button.addEventListener('mouseover', () => {
  //     mouseCursor.classList.add('link-grow');
  //     gsap.to(mouseCursor, 0.4, {
  //       scale: 2,
  //     });
  //   });
  // });

  swiperBtns.forEach(btn => {
    btn.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 1,
      });
    });
    btn.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 2,
      });
    });
  });
}
