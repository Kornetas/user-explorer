import { fetchUsers } from './services/api.js';
import { UserCard } from './components/UserCard.js';
import { SearchBar } from './components/SearchBar.js';

export async function initApp(container) {
    const app = document.createElement('div');
    const list = document.createElement('div');
    list.id = 'user-list';
  
    //  Spinner
    const loader = document.createElement('div');
    loader.className = 'spinner-container';
    loader.innerHTML = `<div class="lds-dual-ring"></div>`;
    document.body.appendChild(loader);
    
    

    container.appendChild(app);
  
    // minimalne opóźnienie
    await new Promise(resolve => setTimeout(resolve, 2000));
  
    const users = await fetchUsers();
    loader.remove(); // usuwamy spinner
  
    // toast gotowe
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = 'Gotowe!';
    document.body.appendChild(toast);
  
    // usun toast po 2 sek
    setTimeout(() => toast.remove(), 2000);
  
    const search = SearchBar((query) => {
      list.innerHTML = "";
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
  
      if (filtered.length === 0) {
        const empty = document.createElement('p');
        empty.textContent = 'Brak wyników.';
        list.appendChild(empty);
      } else {
        filtered.forEach(user => list.appendChild(UserCard(user)));
      }
    });
  
    app.appendChild(search);
    users.forEach(user => list.appendChild(UserCard(user)));
    app.appendChild(list);
  }
  