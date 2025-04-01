import { fetchUsers } from './services/api.js';
import { Spinner } from './components/Spinner.js';
import { showToast } from './components/Toast.js';
import { Header } from './components/Header.js';
import { UserList } from './components/UserList.js';

export async function initApp(container) {
  // 1. Wczytaj tryb ciemny i sortowanie z localStorage
  const savedDark = localStorage.getItem('darkMode') === 'true';
  const savedSort = localStorage.getItem('sortAsc') === 'false' ? false : true;

  if (savedDark) {
    document.body.classList.add('dark');
  }

  const spinner = Spinner();
  document.body.appendChild(spinner);
  await new Promise((res) => setTimeout(res, 3000));

  const users = await fetchUsers();
  spinner.remove();
  showToast("Gotowe! ✅");

  // Lokalny stan
  let sortAsc = savedSort;
  let searchQuery = '';
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  const app = document.createElement('div');
  app.className = 'app';

  const listContainer = document.createElement('div');

  // 2. Tworzymy header z aktualnym `sortAsc` i `isDark`
  const header = Header({
    sortAsc,
    isDark: savedDark,
    getSortAsc: () => sortAsc,
    onSearch: (query) => {
      searchQuery = query;
      render();
    },
    onSortToggle: () => {
      sortAsc = !sortAsc;
      localStorage.setItem('sortAsc', sortAsc); 
      render();
    },
    darkModeToggle: () => {
      document.body.classList.toggle('dark');
      const nowDark = document.body.classList.contains('dark');
      localStorage.setItem('darkMode', nowDark); 
    },
  });

  app.appendChild(header);
  app.appendChild(listContainer);
  container.appendChild(app);

  render();

  function render() {
    const filtered = users
      .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) =>
        sortAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );

    listContainer.innerHTML = '';
    listContainer.appendChild(UserList(filtered, favorites, toggleFavorite));
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      favorites = favorites.filter(f => f !== id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    render();
  }
}
