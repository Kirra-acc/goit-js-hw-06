const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {

  const requiredLength = input.dataset.length;
  const inputLength = input.value.length;

  input.classList.remove("invalid");

  if (inputLength == requiredLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});