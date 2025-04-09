export function FavoritesToggle(isActive = false, onToggle = () => {}) {
  // create wrapper for the toggle
  const wrapper = document.createElement("div");
  wrapper.className = "favorites-toggle";

  //create the heart icon
  const heart = document.createElement("span");
  heart.className = "heart-toggle";
  heart.textContent = isActive ? "❤️" : "🤍";

  //create the label next to the heart
  const label = document.createElement("span");
  label.textContent = "Show favorites";

  // toggle state on click
  heart.addEventListener("click", () => {
    isActive = !isActive;
    heart.textContent = isActive ? "❤️" : "🤍";
    localStorage.setItem("favoritesOnly", isActive);
    onToggle(isActive);
  });

  // put it all together
  wrapper.appendChild(heart);
  wrapper.appendChild(label);
  return wrapper;
}
