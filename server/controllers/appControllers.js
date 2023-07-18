import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js'

// middleware for user verification
// Middleware for user verification
export async function verifyUser(req, res, next) {
  try {
    const { username, email } = req.method === 'GET' ? req.query : req.body;
    let user;

    if (username) {
      user = await UserModel.findOne({ username });
    } else if (email) {
      user = await UserModel.findOne({ email });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user; // Assign the user object to the request object for use in subsequent middleware or controllers
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Authentication error' });
  }
}

// register
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

// login
export async function login(req, res) {
  const { username, email, password } = req.body;

  try {
    let user;
    if (email) {
      user = await UserModel.findOne({ email });
    } else if (username) {
      user = await UserModel.findOne({ username });
    }

    if (!user) return res.status(400).json({ error: 'Username or email not found' });

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) return res.status(403).json({ error: 'Invalid password' });

    const token = jwt.sign({
        userId: user._id,
        username: user.username
      },
      ENV.JWT_SECRET,
      { expiresIn: '24h' }
    );

    return res.status(200).json({
      username: user.username,
      token,
      message: 'Login successful'
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
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