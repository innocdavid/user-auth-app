import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter unique username'],
    unique: [true, 'Username must be unique'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address'],
    unique: true,
  },
  firstName: { type: String, },
  lastName: { type: String, },
  telephone: { type: Number, },
  address: { type: String, },
  profile: { type: String, },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);