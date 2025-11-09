const initApp = () => {
  const hamburgerBtn = document.getElementById
  ('hamburger-button')
  const mobileMenu = document.getElementById
  ('mobile-menu');

  const toggleMenu = => {
    mobileMenu.classListtoggle('hidden')
    mobileMenu.classListtoggle('flex')
  }


  hamburgerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click', toggleMennu)
}

document.addEventListener('DOMContentLoaded', initApp)