import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default class Animations {
  constructor() {
    this.scrollTrigger = ScrollTrigger;
    gsap.registerPlugin(this.scrollTrigger);
  }

  createLeftAnimation() {
    const boxes = gsap.utils.toArray('.animationLeft');
    boxes.forEach((box) => {
      gsap.set(box, { x: '-100px', opacity: 0 });
      const tl = this.#scrollTriggerCreate(box);
      tl.to(box, { x: '0', opacity: 1, duration: 1 });
    });
  }

  createRightAnimation() {
    const boxes = gsap.utils.toArray('.animationRight');
    boxes.forEach((box) => {
      gsap.set(box, { x: '100px', opacity: 0 });
      const tl = this.#scrollTriggerCreate(box);
      tl.to(box, { x: '0', opacity: '1', duration: 1 });
    });
  }

  #scrollTriggerCreate(box) {
    return gsap.timeline({
      scrollTrigger: {
        trigger: box,
        toggleActions: 'play reset play reset',
      },
    });
  }
}
