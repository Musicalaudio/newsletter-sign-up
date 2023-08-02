let input = document.querySelector(".sign-up__form input");
let form = document.querySelector(".sign-up__form");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // console.log("test");
  let email = input.value.trim();
  if (validateForm(email)) getConfirmation(email);
}

function validateForm(email) {
  let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (email.match(emailPattern)) {
    input.setAttribute("aria-invalid", false);
    return true;
  } else {
    input.setAttribute("aria-invalid", true);
    return false;
  }
}

function getConfirmation(email) {
  document.querySelector(".sign-up__start").classList.toggle("display-none");
  document.querySelector(".sign-up__success").classList.toggle("display-none");
  document.querySelector(".sign-up__email").innerText = email;
}
