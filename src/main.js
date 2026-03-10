(() => {
  const refs = {
    openMobMenuBtn: document.querySelector('[data-mob-menu-open]'),
    closeMobMenuBtn: document.querySelector('[data-mob-menu-close]'),
    mobMenu: document.querySelector('[data-mobile-menu]'),
    mobMenuLinks: document.querySelectorAll('[data-nav-mobile-link]'),
    header: document.querySelector('.page-header'),
    scrollTrigger: document.querySelector('#scroll-trigger')
  };

  function toggleMobMenu() {
    refs.mobMenu.classList.toggle('is-open');
  };

  function closeMobMenu() {
    refs.mobMenu.classList.remove("is-open")
  };

  // Logic for the IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    refs.header.classList.toggle('is-scrolled', !entries[0].isIntersecting);
  });

  if (refs.scrollTrigger) {
    observer.observe(refs.scrollTrigger);
  }

  refs.openMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.closeMobMenuBtn.addEventListener("click", toggleMobMenu);
  refs.mobMenuLinks.forEach(link => link.addEventListener("click", closeMobMenu));
})();