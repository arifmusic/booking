const db = require("../db");

function validate(data) {
  if (!data.username || !data.password || !data.confirmPassword) {
    return { isValid: false, error: 'All fields are required.' };
  }

  if (data.username.length < 3) {
    return { isValid: false, error: 'Username should be at least 3 symbols long.' };
  }

  if (data.password.length < 6) {
    return { isValid: false, error: 'Password should be at least 6 symbols long.' };
  }

  if (data.password !== data.confirmPassword) {
    return { isValid: false, error: 'Password and confirmation do not match.' };
  }

  const existingUser = db
    .get('users')
    .find({ username: data.username })
    .value();

  if (existingUser) {
    return { isValid: false, error: 'This username is already taken.' };
  }

  return { isValid: true, error: null };
}

module.exports = validate;