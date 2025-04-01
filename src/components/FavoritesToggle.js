export function FavoritesToggle(isActive = false, onToggle = () => {}) {
    const wrapper = document.createElement('div');
    wrapper.className = 'favorites-toggle';
  
    const heart = document.createElement('span');
    heart.className = 'heart-toggle';
    heart.textContent = isActive ? '❤️' : '🤍';
  
    const label = document.createElement('span');
    label.textContent = 'Pokaż ulubionych';
  
    // Kliknięcie zmienia stan
    heart.addEventListener('click', () => {
      isActive = !isActive;
      heart.textContent = isActive ? '❤️' : '🤍';
      localStorage.setItem('favoritesOnly', isActive);
      onToggle(isActive);
    });
  
    wrapper.appendChild(heart);
    wrapper.appendChild(label);
    return wrapper;
  }
  