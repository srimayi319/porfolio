document.querySelector('a[href="#contact"]').addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

