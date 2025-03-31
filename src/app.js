import { fetchUsers } from './services/api.js';
import { Spinner } from './components/Spinner.js';
import { showToast } from './components/Toast.js';
import { Header } from './components/Header.js';
import { UserList } from './components/UserList.js';


export async function initApp(container) {
  // Spinner start
  const spinner = Spinner();
  document.body.appendChild(spinner);

  await new Promise(resolve => setTimeout(resolve, 2000));
  const users = await fetchUsers();
  spinner.remove();

  showToast("Gotowe! ✅");

  // State
  let sortAsc = true;
  let searchQuery = '';
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  // Render wszystko
  const app = document.createElement('div');
  const header = Header({
    getSortAsc: () => sortAsc,
    isDark: localStorage.getItem('darkMode') === 'true',
    onSearch: (query) => {
      searchQuery = query;
      render();
    },
    onSortToggle: () => {
      sortAsc = !sortAsc;
      render();
    },
    darkModeToggle: () => {
      document.body.classList.toggle('dark');
      const dark = document.body.classList.contains('dark');
      localStorage.setItem('darkMode', dark);
    }
  });

  const listContainer = document.createElement('div');
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
    listContainer.appendChild(
      UserList(filtered, favorites, toggleFavorite)
    );
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
