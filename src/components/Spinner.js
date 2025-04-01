export function Spinner() {
    const loader = document.createElement('div');
    loader.className = 'spinner-container';
    loader.innerHTML = `
      <div class="dual-spinner">
        <div class="ring outer"></div>
        <div class="ring inner"></div>
      </div>
      <div class="spinner-text">Ładowanie<span class="dots">...</span></div>
    `;
    return loader;
  }
  