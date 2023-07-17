export async function register(req, res) {
  res.json('register route');
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