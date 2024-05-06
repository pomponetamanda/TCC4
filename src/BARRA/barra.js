// sidebar.js
const sidebar = document.querySelector('#sidebar');
const toggleButton = document.querySelector('#toggle-button');


toggleButton.addEventListener('click', () => {
  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  } else {
    sidebar.classList.add('active');
  }
});