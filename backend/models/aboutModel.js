const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  faahfaahinYar: String,
  faahfaahin: String,
});

const About = mongoose.model('About', aboutSchema, 'about');

module.exports = About;
