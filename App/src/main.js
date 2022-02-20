import { gsap } from 'gsap';
import 'ScrollToPlugin';
this.$scrollmagic.handleScrollTo = function (target) {
  gsap.to(window, 1.5, {
    scrollTo: {
      y: target,
      autoKill: false,
    },
  });
};
