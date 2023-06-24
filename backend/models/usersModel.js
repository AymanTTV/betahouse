const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  address: String,
  gender: String,
  userPower: String,
});

const monmodel = mongoose.model('users', usersSchema, 'users');

module.exports = monmodel;
