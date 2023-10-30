// konspekt
// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   cont form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
  
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   form.reset();
// }

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const inputs = form.elements;

  if (!inputs[0].value || !inputs[1].value) {
    return alert("Please fill all fields!");
  }

  const email = inputs[0].value;
  const pass = inputs[1].value;
  const data = { email, pass };

  console.log({email, pass});

  form.reset();
});



// Case2

// const form = document.querySelector(".login-form");
// const button = document.querySelector('[type="submit"]');

// function getValueOfEmail () {
//     const inputEmail = document.querySelector('[type="email"]');
//     if (inputEmail.value !== "") {
//         return inputEmail.value;
//     } alert("Please fill all fields!");
// }
// function getValueOfPass () {
//     const inputPass = document.querySelector('[type="password"]');
//     if (inputPass.value !== "") {
//         return inputPass.value;
//     } alert("Please fill all fields!");
// }


// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const emailCase = getValueOfEmail();
//     const passCase = getValueOfPass();
//     console.log({emailCase, passCase});

// form.reset();
// });