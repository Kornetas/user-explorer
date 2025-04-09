import { SearchBar } from "./SearchBar.js";
import { FavoritesToggle } from "./FavoritesToggle.js";

export function Header({
  onSearch,
  onSortToggle,
  getSortAsc,
  darkModeToggle,
  isDark,
  onFavoritesToggle,
}) {
  // Create the main container for header controls
  const container = document.createElement("div");
  container.className = "controls";

  // Sort button (toggles A-Z / Z-A)
  const sortBtn = document.createElement("button");
  sortBtn.className = "sort-btn";
  sortBtn.textContent = getSortAsc() ? "Sort A-Z 🔽" : "Sort Z-A 🔼";
  sortBtn.addEventListener("click", () => {
    onSortToggle();
    sortBtn.textContent = getSortAsc() ? "Sort A-Z 🔽" : "Sort Z-A 🔼";
  });

  // Theme toggle button light, dark mode
  const themeBtn = document.createElement("button");
  themeBtn.className = "theme-btn";
  themeBtn.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
  themeBtn.addEventListener("click", () => {
    darkModeToggle();
    const nowDark = document.body.classList.contains("dark");
    themeBtn.textContent = nowDark ? "☀️ Light mode" : "🌙 Dark mode";
  });

  // Search input component
  const search = SearchBar(onSearch);

  // Favorites toggle heart icon + label
  const favoritesToggle = FavoritesToggle(
    localStorage.getItem("favoritesOnly") === "true",
    onFavoritesToggle
  );

  // Append all controls to the container
  container.appendChild(themeBtn);
  container.appendChild(sortBtn);
  container.appendChild(search);
  container.appendChild(favoritesToggle);

  return container;
}
