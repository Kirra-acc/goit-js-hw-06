const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const length = input.value.length;

  const correctLength = length === input.dataset.length;

  input.classList.toggle("valid", correctLength);
  input.classList.toggle("invalid", !correctLength);
});