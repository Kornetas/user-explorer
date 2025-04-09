import { FavoritesToggle } from "../src/components/FavoritesToggle.js";

//simple expect helper to compare test output
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

  //create toggle component with initial state = false
  const toggle = FavoritesToggle(false, (value) => {
    toggledValue = value;
  });

  //add toggle to DOM so we can query it
  document.body.appendChild(toggle);

  const heart = toggle.querySelector(".heart-toggle");

  //check initial state
  expect(heart.textContent, "🤍", "initial heart should be empty");

  // simulate first click should change to filled
  heart.click();
  expect(heart.textContent, "❤️", "after 1st click, heart should be filled");
  expect(toggledValue, true, "onToggle should receive true");

  // simulate second click should go back to empty
  heart.click();
  expect(heart.textContent, "🤍", "after 2nd click heart should be empty");
  expect(toggledValue, false, "onToggle should receive false");

  // clean up DOM
  toggle.remove();
}

testFavoritesToggle();
