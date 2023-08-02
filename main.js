let input = document.querySelector(".sign-up__form input");
let form = document.querySelector(".sign-up__form");
let returnButton = document.querySelector(".sign-up__success button");
form.addEventListener("submit", submitForm);
returnButton.addEventListener("click", returnToSignUp);

function submitForm(e) {
  e.preventDefault();
  let email = input.value.trim();
  validateForm(email)
    ? getConfirmation(email, true)
    : getConfirmation(email, false);
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

function getConfirmation(email, isValid) {
  if (isValid) {
    document.querySelector(".sign-up__start").classList.toggle("display-none");
    document
      .querySelector(".sign-up__success")
      .classList.toggle("display-none");
    document.querySelector(".sign-up__email").innerText = email;
  }

  document.querySelector(".sign-up__error").innerText = "Valid email required";
}

function returnToSignUp() {
  document.querySelector(".sign-up__start").classList.toggle("display-none");
  document.querySelector(".sign-up__success").classList.toggle("display-none");
}
