import { FavoritesToggle } from "../src/components/FavoritesToggle.js";

function expect(received, expected, label) {
  const pass = received === expected;
  if (pass) {
    console.log(`✅ ${label}`);
  } else {
    console.error(`❌ ${label} — expected: "${expected}", got: "${received}"`);
  }
}

function testFavoritesToggle() {
  let toggledValue = null;

  // Create toggle component
  const toggle = FavoritesToggle(false, (value) => {
    toggledValue = value;
  });

  document.body.appendChild(toggle);

  const heart = toggle.querySelector(".heart-toggle");

  // Check initial state
  expect(heart.textContent, "🤍", "initial heart should be empty");

  //Simulate click to mark favorite
  heart.click();
  expect(heart.textContent, "❤️", "after 1st click, heart should be filled");
  expect(toggledValue, true, "onToggle should receive true");

  // Simulate click to unmark
  heart.click();
  expect(heart.textContent, "🤍", "after 2nd click heart should be empty");
  expect(toggledValue, false, "onToggle should receive false");

  //Clean up
  toggle.remove();
}

testFavoritesToggle();
