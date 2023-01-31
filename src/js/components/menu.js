const menuButton = document.querySelector('.nav-mobile__burger');
const menu = document.querySelector('.nav-mobile__bottom');
const nav = document.querySelector('.nav-mobile');
const logo = document.querySelector('.logo__img');

menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('active');
  logo.classList.toggle('active');
  nav.classList.toggle('active');
	menu.classList.toggle('active');

  if (logo.classList.contains('active')) {
    logo.src = 'img/footer_logo.png'
  } else {
    logo.src = 'img/header_logo.png'
  }
})
