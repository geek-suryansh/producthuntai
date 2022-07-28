/**
 * Check if the information to login is valid
 * @param {*} values The information of the user account
 * @returns {object} An object containing the information errors wording
 */
export default function validateLogin(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "The email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email.";
  }

  if (!values.password) {
    errors.password = "The password is required.";
  } else if (values.password.length < 6) {
    errors.password = "The password must contain at least 6 characters.";
  }

  return errors;
}
