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

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    error.password = toast.error('Password Required...!');
  } else if (values.password.includes(' ') || values.password.length === 0) {
    error.password = toast.error('Invalid Password...!');
  } else if (values.password.length < 6) {
    error.password = toast.error('Password Too Short...!');
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error('Password must contain at least one special character');
  }

  return error;
}

// validate reset password
export async function validateResetPassword(values){
  const errors = verifyPassword({}, values);
  if (!errors || values.password !== values.confirm_password) {
    errors.password = toast.error('Password not match');
  }
  return errors;
}

// validate fields on the register component
export async function validateRegister(values) {
  const errors = verifyEmail({}, values)
  if (!errors) { 
    return validateUsername((errors, values))
  }
  

  return errors ;
}

// validate email
function verifyEmail(error = {}, values) {
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!values.email) {
    error.email = toast.error('Email Required...!');
  } else if (!validEmail.test(values.email)) {
    error.email = toast.error('Invalid Email Address');
  }
}

