# Signup Page Implementation

This project implements a signup page using JavaScript for form validation. It consists of two main JavaScript functions: `validatePassword` and `validateSignUp`, which work together to validate the email and password fields before allowing the user to sign up.

## `validatePassword` Function
- This function checks if a password meets certain criteria:
  - Minimum eight characters
  - At least one letter
  - At least one number
  - At least one special character
- It returns `true` if the password meets the criteria, otherwise `false`.

## `validateSignUp` Function
- This function is triggered when the sign-up button is clicked.
- It retrieves the email and password values from the input fields.
- It calls the `validatePassword` function to check if the password is valid.
- If the email is not empty and the password is valid, it displays a success message.
- If the email is missing or the password is incorrect, it displays an error message.

These functions work together to ensure that users provide a valid email and password before signing up. The `validatePassword` function ensures that the password meets certain security requirements, while the `validateSignUp` function handles the overall form validation process.
