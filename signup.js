// Get the sign-up button element
const signUpButton = document.querySelector(".btn");
// Get the email input element
const email = document.querySelector("#email");
// Get the password input element
const password = document.querySelector("#password");
// Get the message element to display feedback
const message = document.querySelector("#message");

// Add event listener to the sign-up button for validation
signUpButton.addEventListener("click", validateSignUp);

// Function to validate the sign-up form
function validateSignUp() {
  // Get the value of the email input field
  const emailText = email.value;
  // Check if email field is not empty
  const isNotEmpty = emailText !== "";
  // Get the value of the password input field
  const passwordText = password.value;
  // Check if the password is valid
  const passwordIsGood = validatePassword(passwordText);
  // Update message based on validation results
  if (isNotEmpty && passwordIsGood) {
    // Display success message if both email and password are valid
    message.style.color = "green";
    message.innerText = "Welcome!";
  } else {
    // Display error message if email is missing or password is incorrect
    message.style.color = "red";
    message.innerText = "Email missing or incorrect password";
  }
}
