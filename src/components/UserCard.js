export function UserCard(
  user,
  isFavorite = false,
  onToggleFavorite = () => {}
) {
  // Create the card container
  const card = document.createElement("div");
  card.className = "user-card";

  // Heart icon filled if favorite
  const heart = document.createElement("span");
  heart.textContent = isFavorite ? "❤️" : "🤍";
  heart.className = "heart";
  heart.addEventListener("click", onToggleFavorite);

  // User info
  card.innerHTML = `
    <h3>${user.name}</h3>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
  `;

  // Add heart icon to the card
  card.appendChild(heart);

  return card;
}
