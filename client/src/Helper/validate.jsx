import toast from 'react-hot-toast'

export async function validateUsername(values) {
  const errors = verifyUsername({}, values);
  return errors;
}

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