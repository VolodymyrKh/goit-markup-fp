(() => {
  const refs = {
    openMobMenuBtn: document.querySelector('[data-mob-menu-open]'),
    closeMobMenuBtn: document.querySelector('[data-mob-menu-close]'),
    mobMenu: document.querySelector('[data-mobile-menu]'),
    mobMenuLinks: document.querySelectorAll('[data-nav-mobile-link]')
  };

  function toggleMobMenu() {
    refs.mobMenu.classList.toggle('is-open');
  };

  function closeMobMenu() {
    refs.mobMenu.classList.remove("is-open")
  };

  refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.closeMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.mobMenuLinks.forEach(link => link.addEventListener("click", closeMobMenu));
})();