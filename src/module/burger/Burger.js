export default class BurgerData {
  constructor() {
    this.mask = document.querySelector('#mask');
    this.burger = document.querySelector('#burger');
    this.menu = document.querySelector('#menu');
    this.body = document.querySelector('body');
  }

  openMenu() {
    this.burger.addEventListener('click', () => {
      this.mask.classList.add('block');
      this.menu.classList.add('position');
      this.body.classList.add('hidden');
      this.burger.classList.add('rotate');
    });
  }

  closeMenu() {
    document.addEventListener('click', (e) => {
      const eT = e.target.classList;
      if (eT.contains('mask') || eT.contains('menu_list') || eT.contains('menu_item') || eT.contains('burger')) {
        this.mask.classList.remove('block');
        this.menu.classList.remove('position');
        this.body.classList.remove('hidden');
        this.burger.classList.remove('rotate');
      }
    });
  }
}
