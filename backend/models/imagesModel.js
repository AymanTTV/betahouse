const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  guriId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guriyaha',
  },
  guriImages: [Buffer], // Array of guriImages as Buffers
  bathroomImages: [String], // Array of bathroomImages as Strings
});

const Image = mongoose.model('Image', imageSchema, 'images');

module.exports = Image;
