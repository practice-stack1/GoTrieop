const mobMenu = (trigger_selector, menu_selector, menu_item, active_class) => {
  const trigger = document.querySelector(trigger_selector),
        menu = document.querySelector(menu_selector);

  trigger.addEventListener('click', e => {
    let target = e.target;
    if(target.closest(trigger_selector)){
      addActiveClass(target, active_class);
    }
  });
  menu.addEventListener('click', (e) => {
    let target = e.target;
    if(target.closest(menu_item) || !target.closest('.menu__overlay')){
      removeActiveClass(active_class);
    }
  });


  function addActiveClass(burger, active){
    burger.classList.add(active);
    menu.classList.add(active);
    document.body.style.overflow = 'hidden';
  }
  function removeActiveClass(active){
    trigger.classList.remove(active);
    menu.classList.remove(active);
    document.body.style.overflow = 'auto';
  }
};

export default mobMenu;