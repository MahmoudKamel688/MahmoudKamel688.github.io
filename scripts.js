document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.content h2');
  titles.forEach(title => {
    title.addEventListener('mouseover', () => {
      title.style.transform = 'rotate(5deg)';
      title.style.transition = 'transform 0.3s';
    });
    title.addEventListener('mouseout', () => {
      title.style.transform = 'rotate(0deg)';
    });
  });

  const scrollUpButton = document.getElementById('scrollUp');
  const scrollDownButton = document.getElementById('scrollDown');

  scrollUpButton.addEventListener('click', () => {
    window.scrollBy({
      top: -window.innerHeight,
      behavior: 'smooth'
    });
  });

  scrollDownButton.addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });

  window.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    } else {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
      window.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth'
      });
    } else if (event.key === 'ArrowDown') {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  });
});
