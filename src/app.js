import { fetchUsers } from './services/api.js';
import { Spinner } from './components/Spinner.js';
import { showToast } from './components/Toast.js';
import { Header } from './components/Header.js';
import { UserList } from './components/UserList.js';

export async function initApp(container) {
  // 1. Wczytaj ustawienia z localStorage
  const savedDark = localStorage.getItem('darkMode') === 'true';
  const savedSort = localStorage.getItem('sortAsc') === 'false' ? false : true;
  const savedFavoritesOnly = localStorage.getItem('favoritesOnly') === 'true';

  if (savedDark) {
    document.body.classList.add('dark');
  }

  // 2. Spinner
  const spinner = Spinner();
  document.body.appendChild(spinner);
  await new Promise((res) => setTimeout(res, 3000));

  // Toast
  const users = await fetchUsers();
  spinner.remove();
  showToast("Gotowe! ✅");

  // 3. Stan aplikacji
  let sortAsc = savedSort;
  let searchQuery = '';
  let showFavoritesOnly = savedFavoritesOnly;
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  // 4. Layout
  const app = document.createElement('div');
  app.className = 'app';

  const listContainer = document.createElement('div');

  // 5. Header z przekazaniem wszystkich akcji
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

    onFavoritesToggle: (value) => {
      showFavoritesOnly = value;
      localStorage.setItem('favoritesOnly', value);
      render();
    }
  });

  app.appendChild(header);
  app.appendChild(listContainer);
  container.appendChild(app);

  render();

  // 6. Render z uwzględnieniem filtrowania ulubionych
  function render() {
    let filtered = users
      .filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
    if (showFavoritesOnly) {
      filtered = filtered.filter(user => favorites.includes(user.id));
    }
  
    filtered.sort((a, b) =>
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
