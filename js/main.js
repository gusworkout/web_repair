// menu.js
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

btn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
