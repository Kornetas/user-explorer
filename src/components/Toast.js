export function showToast(message = "Done! ✅") {
  // Create toast element
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  // Add toast to the DOM
  document.body.appendChild(toast);

  // Remove toast after 3 seconds
  setTimeout(() => toast.remove(), 3000);
}
