const counterValue = document.querySelector("#value").textContent;

const decrementButton = document.querySelector("#counter button[data-action='decrement']");
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
});

const incrementButton = document.querySelector("#counter button[data-action='increment']");
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
});