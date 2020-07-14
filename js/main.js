const header = document.querySelector('.header');
const headerNavBtn = document.querySelector('.header-nav-btn');
const headerBag = document.querySelector('.header-bag');
const nav = document.querySelector('.nav');
const searchInput = document.querySelector('.search-input');
const searchGroup = document.querySelector('.search-group');
const reset = document.querySelector('.reset');
const resetImg = document.querySelector('.reset-img');
const navList = document.querySelector('.nav-list');
const footerNavItemHeaders = document.querySelectorAll(
  '.footer-nav-item-header'
);

/* Toggle menu */
const toggleMenu = () => {
  /* Darken / Lighten Header */
  header.classList.toggle('darken');

  /* Rotate Nav Button */
  headerNavBtn.classList.toggle('open');

  /* Hide / Show Header Bag  */
  headerBag.classList.toggle('hide');

  /* Open / Close the Nav List */
  nav.classList.toggle('open');
};

/* Focus Input */
const focusInput = () => {
  /* Hide Header */
  if (!header.classList.contains('close')) {
    header.classList.add('close');
  }

  /* Rise Up the Nav */
  if (!nav.classList.contains('rise')) {
    nav.classList.add('rise');
  }

  /* Narrow the Search Input Width */
  if (!searchGroup.classList.contains('narrow')) {
    searchGroup.classList.add('narrow');
  }

  /* Show the Reset Word */
  if (!reset.classList.contains('show')) {
    reset.classList.add('show');
  }

  /* Hide Nav List */
  if (!navList.classList.contains('hide')) {
    navList.classList.add('hide');
  }
};

/* Reset Menu */
const resetMenu = () => {
  hideResetImg();

  /* Show Header */
  if (header.classList.contains('close')) {
    header.classList.remove('close');
  }

  /* Bring Down the Nav */
  if (nav.classList.contains('rise')) {
    nav.classList.remove('rise');
  }

  /* Widen the Search Input Width */
  if (searchGroup.classList.contains('narrow')) {
    searchGroup.classList.remove('narrow');
  }

  /* Hide the Reset Word */
  if (reset.classList.contains('show')) {
    reset.classList.remove('show');
  }

  /* Show Nav List */
  if (navList.classList.contains('hide')) {
    navList.classList.remove('hide');
  }
};

/* Show Reset Button */
const showResetImg = () => {
  if (!resetImg.classList.contains('show')) {
    resetImg.classList.add('show');
  }
};

/* Hide Reset Button */
const hideResetImg = () => {
  /* Clear Input */
  searchInput.value = '';

  if (resetImg.classList.contains('show')) {
    resetImg.classList.remove('show');
  }
};

/* Toggle Footer Nav List */
const toggleFooterList = e => {
  const child = e.target.lastElementChild;
  if (!child.classList.contains('open')) {
    child.classList.add('open');
  } else {
    child.classList.remove('open');
  }

  const sibling = e.target.nextElementSibling;
  if (!sibling.classList.contains('open')) {
    sibling.classList.add('open');
  } else {
    sibling.classList.remove('open');
  }
};

/* EVENTS */
/* User Clicks Nav Button */
headerNavBtn.addEventListener('click', toggleMenu);
/* User Focuses on Search Input */
searchInput.addEventListener('focus', focusInput);
/* User Inputs in Search Input */
searchInput.addEventListener('keyup', showResetImg);
/* User Clicks Reset Button */
resetImg.addEventListener('click', hideResetImg);
/* User Clicks Reset Word */
reset.addEventListener('click', resetMenu);
/* User Clicks Footer Nav */
footerNavItemHeaders.forEach(header =>
  header.addEventListener('click', toggleFooterList)
);
