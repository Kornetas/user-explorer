export function UserCard(user, isFavorite = false, onToggleFavorite = () => {}) {
  const card = document.createElement('div');
  card.className = 'user-card';

  const heart = document.createElement('span');
  heart.textContent = isFavorite ? '❤️' : '🤍';
  heart.className = 'heart';
  heart.addEventListener('click', onToggleFavorite);

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Telefon: ${user.phone}</p>
  `;

  card.appendChild(heart);
  return card;
}
