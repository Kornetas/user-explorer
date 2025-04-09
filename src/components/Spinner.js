export function Spinner() {
  // Create the container for the spinner
  const loader = document.createElement("div");
  loader.className = "spinner-container";

  // Spinner markup + loading text
  loader.innerHTML = `
      <div class="dual-spinner">
        <div class="ring outer"></div>
        <div class="ring inner"></div>
      </div>
      <div class="spinner-text">Loading<span class="dots">...</span></div>
    `;
  return loader;
}
