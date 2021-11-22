const fixMenu = (menu_selector) => {
  const menu = document.querySelector(menu_selector);
  let lastScrollPos = 0;

  window.addEventListener('scroll', function(e) {
    let currentScrollPos = window.pageYOffset;
    if(currentScrollPos > lastScrollPos){
      menu.style.position = 'absolute';
    } else {
      menu.style.position = 'fixed';
    }

    lastScrollPos = currentScrollPos;
  });
};

export default fixMenu;