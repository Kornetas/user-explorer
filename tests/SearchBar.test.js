import { SearchBar } from "../src/components/SearchBar.js";

//simple expect helper to compare test output
function expect(received, expected, label) {
  const pass = received === expected;
  if (pass) {
    console.log(`🟢 ${label}`);
  } else {
    console.error(`🛑 ${label} — expected: "${expected}", got: "${received}"`);
  }
}

function testSearchBar() {
  let queryValue = null;

  //set fake saved value in localstorage
  localStorage.setItem("searchQuery", "michael");

  //create search input with callback that captures value
  const input = SearchBar((query) => {
    queryValue = query;
  });

  //add to DOM so we can interact with it
  document.body.appendChild(input);

  //check placeholder
  expect(input.placeholder, "Search user...", "Placeholder should be correct");

  //check if value was restored from localstorage
  expect(input.value, "michael", "Should restore value from localStorage");

  //simulate user typing
  input.value = "brown";
  input.dispatchEvent(new Event("input"));

  //check if onSearch was called with new value
  expect(queryValue, "brown", "onSearch should be called with typed value");

  // clean up DOM
  input.remove();
  localStorage.removeItem("searchQuery");
}

testSearchBar();
