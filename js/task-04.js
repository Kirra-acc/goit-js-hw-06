let counterValue = 0;

const decrementButton = document.querySelector("#counter button[data-action='decrement']");
decrementButton.addEventListener("click", () => {
  counterValue -= 1;

  updateInterface();
});

const incrementButton = document.querySelector("#counter button[data-action='increment']");
incrementButton.addEventListener("click", () => {
  counterValue += 1;

  updateInterface();
});

function updateInterface() {
  const spanValue = document.querySelector("#value");

  spanValue.textContent = counterValue;
}