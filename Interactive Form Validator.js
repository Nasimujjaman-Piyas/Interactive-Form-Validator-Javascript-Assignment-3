const userName = document.getElementById("name");
const password = document.getElementById("password");
const conPassword = document.getElementById("confirmPassword");
const phoneNumber = document.getElementById("phone");
const ageNumber = document.getElementById("age");
const iconPic = document.getElementById("icon");
const button = document.getElementById("btn");
const pera = document.getElementById("pera");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const userInput = userName.value;
  const passwordInput = password.value;
  const conPasswordInput = conPassword.value;
  const phoneNumberInput = phoneNumber.value;
  const ageNumberInput = Number(ageNumber.value);

  if (userInput.length < 3 || userInput.length > 15) {
    alert("Must be 3-15 characters long");
  } else {
    userInput;
    // console.log(userInput);
  }

  if (passwordInput.length < 8) {
    alert("Minimum 8 characters");
  } else {
    passwordInput;
    // console.log(passwordInput);
  }
  if (passwordInput !== conPasswordInput) {
    alert("Passwords do not match");
  } else {
    conPasswordInput;
    // console.log(conPasswordInput);
  }

  if (phoneNumberInput.length < 11) {
    alert("Must be a valid format (e.g., 11 digits )");
  } else {
    phoneNumberInput;
    // console.log(phoneNumberInput);
  }

  if (ageNumberInput < 18 || ageNumberInput > 100) {
    alert("Must be a number between 18 and 100");
  } else {
    ageNumberInput;
    // console.log(ageNumberInput);
  }

  inputValuRemove();
});

iconPic.addEventListener("click", function () {
  const passwordInput = password.type;

  if (passwordInput == "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
});

function inputValuRemove() {
  userName.value = "";
  password.value = "";
  conPassword.value = "";
  phoneNumber.value = "";
  ageNumber.value = "";
}
