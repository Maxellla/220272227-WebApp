document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
      const sectionId = item.getAttribute('href').slice(1);
      const section = document.getElementById(sectionId);
      section.scrollIntoView({behavior: 'smooth'});
      event.preventDefault();
    });
  });