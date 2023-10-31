const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {

  const requiredLength = input.dataset.length;
  const inputLength = input.value.length;

  input.classList.remove("invalid");
  input.classList.remove("valid");

  if (inputLength == requiredLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

// (done?) need to keep just one class- valid or invalid...


// toggle //not working..

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", () => {

//   const requiredLength = input.dataset.length;
//   const inputLength = input.value.length;

//   input.classList.toggle("valid", inputLength === requiredLength);

//   input.classList.toggle("invalid", inputLength !== requiredLength);
// });
