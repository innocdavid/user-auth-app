import toast from 'react-hot-toast'

export async function validateUsername(values) {
  const errors = verifyUsername({}, values);
  return errors;
}

export async function validatePassword(values) {
  const errors = verifyPassword({}, values);
  return errors;
}

// validate username
function verifyUsername(error = {}, values) {
  if (!values.username) {
    error.username = toast.error('Username Required...!');
  } else if (values.username.includes(' ')) {
    error.username = toast.error('Invalid Username...!');
  } else if (values.username.length < 3) {
    error.username = toast.error('Invalid username...!');
  }
  return error;
}

// validate password
function verifyPassword(error = {}, values) {

  const specialChars = /^(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!values.password) {
    error.password = toast.error('Password Required...!');
  } else if (values.password.includes(' ')) {
    error.password = toast.error('Invalid Password...!');
  } else if (values.password.length < 4) {
    error.password = toast.error('Password Too Short...!');
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error('Password must contain at least one special character');
  }

  return error;
}

// validate reset password
export async function validateResetPassword(values){
  const errors = verifyPassword({}, values);
  if(values.password !== values.confirm_password) {
    errors.password = toast.error('Password not match');
  }
  return errors;
}

