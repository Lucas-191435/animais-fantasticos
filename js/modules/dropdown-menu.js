import outsideClick from './outsideclick.js';

export default class DropdownMenu {

  constructor(dropdownMenus, events){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';
    if (events === undefined) { 
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    };

    this.events = ['touchstart', 'click'];
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

  }
  
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  init(){
    if (this.dropdownMenus.length){
      this.addDropdownMenusEvent();
    }

    return this
  }

  addDropdownMenusEvent(){
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }  
}
