(function(){
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!hamburgerBtn || !mobileMenu) return;

    hamburgerBtn.addEventListener('click', () => {
      const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!expanded));

      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('block');
    });

    document.addEventListener('click', (e) => {
      const target = e.target;
      if (window.innerWidth >= 768) return;

      if (!mobileMenu.contains(target) && !hamburgerBtn.contains(target)) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('block');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('block');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('block');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
})();
