const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email uniqueness
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 100, // Set a default balance value if not provided
  },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
