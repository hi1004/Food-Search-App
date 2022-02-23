import gsap from 'gsap';
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
});
export default {
  namespaced: true,
  actions: {
    mouse() {
      cursorEffect();
      function cursorEffect() {
        let mouseCursorContainer = document.querySelector('.cursor-container');
        let mouseCursor = document.querySelector('.cursor');
        let swiperBtns = document.querySelectorAll('.swiper-btn');

        window.addEventListener('mousemove', cursor);

        function cursor(e) {
          gsap.to(mouseCursorContainer, 0.4, {
            x: e.clientX,
            y: e.clientY,
          });
        }

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
    },
  },
};
