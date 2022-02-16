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
  let mouseCursor = document.querySelector('.cursor');
  let links = document.querySelectorAll('a');
  let buttons = document.querySelectorAll('button');
  let svgs = document.querySelectorAll('svg');
  let swiperBtns = document.querySelectorAll('.swiper-btn');

  window.addEventListener('mousemove', cursor);

  function cursor(e) {
    gsap.to(mouseCursor, 0.4, {
      x: e.clientX,
      y: e.clientY,
    });
  }
  links.forEach(link => {
    link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 1,
      });
    });

    link.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 2,
      });
    });
  });

  buttons.forEach(button => {
    button.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 1,
      });
    });

    button.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 2,
      });
    });
  });

  svgs.forEach(svg => {
    svg.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 1,
      });
    });

    svg.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      gsap.to(mouseCursor, 0.4, {
        scale: 2,
      });
    });
  });

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
