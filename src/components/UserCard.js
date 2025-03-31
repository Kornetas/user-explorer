export function UserCard(user) {
    const card = document.createElement('div')
    card.className = 'user-card'
    card.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Telefon: ${user.phone}</p>
  `;
  return card;
}