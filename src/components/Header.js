import { SearchBar } from "./SearchBar.js";

export function Header({ onSearch, onSortToggle, getSortAsc, darkModeToggle, isDark }) {
  const container = document.createElement('div');

  const sortBtn = document.createElement('button');
  sortBtn.textContent = getSortAsc() ? 'Sortuj A-Z 🔽' : 'Sortuj Z-A 🔼';
  sortBtn.className = 'sort-btn';
  sortBtn.addEventListener('click', () => {
    onSortToggle();
    sortBtn.textContent = getSortAsc() ? 'Sortuj A-Z 🔽' : 'Sortuj Z-A 🔼';
  });

  


  // 🌙 Tryb nocny
  const themeBtn = document.createElement('button');
  themeBtn.textContent = isDark ? '☀️ Tryb dzienny' : '🌙 Tryb nocny';
  themeBtn.className = 'theme-btn';
  themeBtn.addEventListener('click', () => {
    darkModeToggle();
    const nowDark = document.body.classList.contains('dark');
    themeBtn.textContent = nowDark ? '☀️ Tryb dzienny' : '🌙 Tryb nocny';
  });

  const search = SearchBar(onSearch);

  container.appendChild(themeBtn);
  container.appendChild(sortBtn);
  container.appendChild(search);

  return container;
}
