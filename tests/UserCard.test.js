import { UserCard } from "../src/components/UserCard.js";

//simple expect helper to compare test output
function expect(received, expected, label) {
  const pass = received === expected;
  if (pass) {
    console.log(`✔️ ${label}`);
  } else {
    console.error(`🚫 ${label} — expected: "${expected}", got: "${received}"`);
  }
}

function testUserCard() {
  let toggleCalled = false;

  //mock user data
  const user = {
    id: 1,
    name: "Michael Brown",
    email: "michi@example.com",
    phone: "323-241-421",
  };

  //create user card with favorite = true
  const card = UserCard(user, true, () => {
    toggleCalled = true;
  });

  //add card to DOM so we can query it
  document.body.appendChild(card);

  //check if user name is rendered
  expect(
    card.querySelector("h3").textContent,
    "Michael Brown",
    "User name should be rendered"
  );

  //check if user name is rendered
  expect(
    card.innerHTML.includes(user.email),
    true,
    "User email should be rendered"
  );

  //check if email and phone are included in the card
  expect(
    card.innerHTML.includes(user.phone),
    true,
    "User phone should be rendered"
  );

  //check heart icon is fill when isFavorite = true
  const heart = card.querySelector(".heart");
  expect(
    heart.textContent,
    "❤️",
    "Heart icon should be filled when isFavorite = true"
  );

  //simulate click
  heart.click();
  expect(
    toggleCalled,
    true,
    "onToggleFavorite should be triggered on heart click"
  );

  // clean up DOM
  card.remove();
}
testUserCard();
