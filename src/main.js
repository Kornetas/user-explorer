import { initApp } from "./app.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");

  if (root) {
    // Initialize the app once DOM is ready
    initApp(root);
  } else {
    console.error("Element #app was not found in the DOM!");
  }
});
