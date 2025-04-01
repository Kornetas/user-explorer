import { SearchBar } from "./SearchBar.js";

export function Header({ onSearch, onSortToggle, getSortAsc, darkModeToggle, isDark }) {
  const container = document.createElement('div');
  container.className = 'controls';

  const sortBtn = document.createElement('button');
  sortBtn.className = 'sort-btn';
  sortBtn.textContent = getSortAsc() ? 'Sortuj A-Z 🔽' : 'Sortuj Z-A 🔼';
  sortBtn.addEventListener('click', () => {
    onSortToggle();
    sortBtn.textContent = getSortAsc() ? 'Sortuj A-Z 🔽' : 'Sortuj Z-A 🔼';
  });

  const themeBtn = document.createElement('button');
  themeBtn.className = 'theme-btn';
  themeBtn.textContent = isDark ? '☀️ Tryb dzienny' : '🌙 Tryb nocny';
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
