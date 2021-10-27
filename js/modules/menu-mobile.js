import outsideClick from './outsideclick.js';

export default class MenuMobile {

  constructor(btnMenu, list, events){
    this.menuButton = document.querySelector(btnMenu);
    this.menuList = document.querySelector(list);
    
    (events === undefined) ? this.events = ['click', 'touchstart'] : this.eventos = events;
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }
  

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents(){
    this.eventos.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init(){
    if (this.menuButton) {
     this.addMenuMobileEvents();
    }
    return this;
  }
}
