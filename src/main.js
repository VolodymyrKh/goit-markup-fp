(() => {
  const refs = {
    openMobMenuBtn: document.querySelector('[data-mob-menu-open]'),
    closeMobMenuBtn: document.querySelector('[data-mob-menu-close]'),
    mobMenu: document.querySelector('[data-mobile-menu]')
  };

  function toggleMobMenu() {
    refs.mobMenu.classList.toggle('is-open');
  };

  refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.closeMobMenuBtn.addEventListener("click", toggleMobMenu);
})();