const counterValue = 0;

const decrementButton = document.querySelector("#counter button[data-action='decrement']");
decrementButton.addEventListener("click", () => {
  counterValue--;
  updateInterface();
});

const incrementButton = document.querySelector("#counter button[data-action='increment']");
incrementButton.addEventListener("click", () => {
  counterValue++;
  updateInterface();
});

function updateInterface() {
  document.querySelector("#value").textContent = counterValue;
}