import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    
    // Check for existing username
    const existingUsername = await UserModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: 'Username already taken' });
    }

    // Check for existing email address
    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: 'Email already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      password: hashedPassword,
      email,
      profile: profile || '',
    });

    // Save the data
    await user.save();
    res.status(201).json({ message: 'User Registered Successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
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