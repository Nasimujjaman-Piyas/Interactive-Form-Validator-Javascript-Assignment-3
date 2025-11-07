// ===== Select elements =====
const userName = document.getElementById("name");
const password = document.getElementById("password");
const conPassword = document.getElementById("confirmPassword");
const phoneNumber = document.getElementById("phone");
const ageNumber = document.getElementById("age");
const iconPic = document.getElementById("icon");
const iconPics = document.getElementById("icons"); // Added confirm-password eye icon button
const button = document.getElementById("btn");
const form = document.getElementById("form");  // Added form reference for submit listener

// ===== Regex patterns =====
const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/; //  Added username validation pattern
const phonePattern = /^[0-9]{11}$/;             //  Added phone validation pattern

// ===== Utility Functions =====
function showError(input, message) {
  removeMessage(input);
  const error = document.createElement("small");
  error.innerText = message;
  error.style.color = "red";
  input.insertAdjacentElement("afterend", error);
  input.style.borderColor = "red";
}

//  New modular validation system: Instead of alert(), shows inline errors near each input


function showSuccess(input) {
  removeMessage(input);
  const success = document.createElement("small");
  success.innerText = "✓ Looks good";
  success.style.color = "green";
  input.insertAdjacentElement("afterend", success);
  input.style.borderColor = "green";
}

//  Added visual success feedback for valid fields


function removeMessage(input) {
  if (input.nextElementSibling && input.nextElementSibling.tagName === "SMALL") {
    input.nextElementSibling.remove();
  }
}
// Helper to clear previous messages before showing new one


// ===== Real-time Validation Functions =====
// Added input event listeners for instant validation feedback

userName.addEventListener("input", () => {
  const value = userName.value.trim();
  if (!usernamePattern.test(value)) {
    showError(userName, "Only letters, numbers, and underscores (3–15 chars)");
  } else {
    showSuccess(userName);
  }
});

password.addEventListener("input", () => {
  const value = password.value;
  if (value.length < 8) {
    showError(password, "Password must be at least 8 characters long");
  } else {
    showSuccess(password);
  }
});

conPassword.addEventListener("input", () => {
  if (conPassword.value !== password.value) {
    showError(conPassword, "Passwords do not match");
  } else if (conPassword.value === "") {
    removeMessage(conPassword);
  } else {
    showSuccess(conPassword);
  }
});

phoneNumber.addEventListener("input", () => {
  const value = phoneNumber.value.trim();
  if (!phonePattern.test(value)) {
    showError(phoneNumber, "Phone must be exactly 11 digits");
  } else {
    showSuccess(phoneNumber);
  }
});

ageNumber.addEventListener("input", () => {
  const age = Number(ageNumber.value);
  if (age < 18 || age > 100) {
    showError(ageNumber, "Age must be between 18 and 100");
  } else if (!ageNumber.value) {
    removeMessage(ageNumber);
  } else {
    showSuccess(ageNumber);
  }
});

// ===== Toggle Password Visibility =====
iconPic.addEventListener("click", function () {
  // console.log(iconPic.id)
  password.type = password.type === "password" ? "text" : "password";
  iconPic.textContent = password.type === "password" ? "👁" : "🙈";
  
});

// Enhanced: Toggles both visibility AND icon emoji change

iconPics.addEventListener("click", function () {
  // console.log(iconPics.id)
  conPassword.type = conPassword.type === "password" ? "text" : "password";
    iconPics.textContent = conPassword.type === "password" ? "👁" : "🙈";

  
});
//  Added support for confirm password visibility toggle


// ===== On Form Submit =====
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = [userName, password, conPassword, phoneNumber, ageNumber];
    //  Detects any red error messages

  const hasError = [...document.querySelectorAll("small")].some((el) =>
    el.style.color.includes("red")
  );

  if (hasError) {
    alert("Please fix errors before submitting.");  //  More user-friendly error summary
    return;
  }

  alert("Form submitted successfully!"); //  Success feedback
  inputs.forEach((input) => {
    input.value = "";
    removeMessage(input);
    input.style.borderColor = "#ccc";
  });
});
