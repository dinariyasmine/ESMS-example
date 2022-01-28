const navSlide = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.tabs');
  const navTabs = document.querySelectorAll('.tabs li');
  menu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navTabs.forEach((tab, index) => {
      tab.style.animation = `tabsFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      tab.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        menu.classList.remove('toggle');
      });
    });
    menu.classList.toggle('toggle');
  });
};

const navLinksScroll = () => {
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('nav ul li');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
        if (current === 'sponsors-faq') {
          if (scrollY < sectionTop + sectionHeight / 3) {
            current = 'sponsors';
          } else {
            current = 'faq';
          }
        }
      }
    });
    navLi.forEach((li) => {
      li.classList.remove('active');
      if (current == null) {
        current = 'footer';
      }
      if (li.classList.contains(current + '-li')) {
        li.classList.add('active');
      }
    });
  });
};
const app = () => {
  navSlide();
  navLinksScroll();
};
app();
