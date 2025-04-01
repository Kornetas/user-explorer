import { initApp } from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    initApp(root);
  } else {
    console.error('Element #app nie został znaleziony w DOM!');
  }
});
