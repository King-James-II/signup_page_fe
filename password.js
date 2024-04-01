// Get the password input element
const txtPassword = document.getElementById("password");
// Get the password error message element
const pPasswordError = document.getElementById("pwError");

// Add event listener to the password input field
txtPassword.addEventListener("input", passwordChanged);

// Function to validate the password based on a pattern
function validatePassword(pw) {
  // Regular expression pattern for password validation
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  // Test if the password matches the pattern
  return pattern.test(pw);
}

// Function to handle changes in the password input field
function passwordChanged() {
  // Get the value of the password input field
  const password = txtPassword.value;
  // Check if the password is valid
  const passwordIsGood = validatePassword(password);
  // Update the password error message based on validation result
  if (passwordIsGood) {
    // Clear the error message if the password is valid
    pPasswordError.innerText = "";
  } else {
    // Display error message if the password is not valid
    pPasswordError.innerText = "Minimum eight characters, at least one letter, one number and one special character";
  }
}
