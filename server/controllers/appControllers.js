import UserModel from '../models/user.js';

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    // check for existing username
    const existingUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, (err, user) => {
        if (err) reject(new Error(err));
        if (user) reject({ error: 'Username already taken' })

        resolve();
      });
    });

    Promise([existingEmail, existingEmail])
      .then(() => {

      }). catch(error => {
        return res.status(500).json({
          error: 'Enable hashed password'
        })
      })

    // check for existing email address
    const existingEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, (err, email) => {
        if (err) reject(new Error(err));
        if (email) reject({ error: 'Email already taken' })

        resolve();
      });

    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

export async function login(req, res) {
  res.json('login route');
}

export async function getUser(req, res) {
  res.json('get user');
}

export async function updateUser(req, res) {
  res.json('update user');
}

export async function generateOTP(req, res) {
  res.json('generate OTP');
}

export async function verifyOTP(req, res) {
  res.json('verify OTP');
}

export async function createResetSessions(req, res) {
  res.json('create sessions');
}

export async function resetPassword(req, res) {
  res.json('reset password');
}