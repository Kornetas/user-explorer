import { UserCard } from "./UserCard.js";

export function UserList(users, favorites, toggleFavorite) {
  const list = document.createElement('div');
  list.id = 'user-list';

  if (users.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'Brak wyników.';
    list.appendChild(empty);
  } else {
    users.forEach(user => {
      const card = UserCard(user, favorites.includes(user.id), () => {
        toggleFavorite(user.id);
      });
      list.appendChild(card);
    });
  }

  return list;
}
