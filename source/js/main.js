const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('.page__body');
const advantagesLink = document.querySelector('.main-nav__link--advantages');
const catalogLink = document.querySelector('.main-nav__link--catalog');
const contactsLink = document.querySelector('.main-nav__link--contacts');
const overlay = document.querySelector('.main-nav__overlay');
const innerHeader = document.querySelector('.inner-header__wrapper');

navMain.classList.remove('is-nojs');

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

function closeMenu() {
  navMain.classList.add('is-closed');
  navMain.classList.remove('is-opened');
  body.classList.remove('is-locked');
  innerHeader.classList.remove('inner-header__wrapper--hidden');
}

function openMenu() {
  navMain.classList.remove('is-closed');
  navMain.classList.add('is-opened');
  innerHeader.classList.add('inner-header__wrapper--hidden');
  body.classList.add('is-locked');
}

navToggle.addEventListener('click', () => {

  if (navMain.classList.contains('is-closed')) {
    body.dataset.scrollY = getBodyScrollTop();
    body.style.top = `-${body.dataset.scrollY}px`;
    openMenu();
  } else {
    closeMenu();
    window.scrollTo(0, body.dataset.scrollY);
  }
});

overlay.addEventListener('click', () => {
  closeMenu();
  window.scrollTo(0, body.dataset.scrollY);
});

function getSmoothScrolling(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
}

function getLinkMobile(element) {
  if (navMain.classList.contains('is-opened')) {
    closeMenu();
    getSmoothScrolling(document.getElementById(element));
  }
}

advantagesLink.addEventListener('click', () => getLinkMobile('advantages'));
catalogLink.addEventListener('click', () => getLinkMobile('catalog'));
contactsLink.addEventListener('click', () => getLinkMobile('contacts'));
