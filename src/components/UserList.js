import { UserCard } from "./UserCard.js";

export function UserList(users, favorites, toggleFavorite) {
  //create the container for user cards
  const list = document.createElement("div");
  list.id = "user-list";

  //if no users match the search/filter
  if (users.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "No results found.";
    list.appendChild(empty);
  } else {
    //render a UserCard for each user
    users.forEach((user) => {
      const card = UserCard(user, favorites.includes(user.id), () => {
        toggleFavorite(user.id);
      });
      list.appendChild(card);
    });
  }

  return list;
}
