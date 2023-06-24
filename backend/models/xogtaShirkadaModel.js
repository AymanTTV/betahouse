const mongoose = require('mongoose');

const xogtaShirkadaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
  location: String,
  logo: [Buffer],
  email: String,
  complainEmail: String,
  complainPhone: String,
  facebook: String,
  tiktok: String,
  twitter: String,
  instagram: String
});

const XogtaShirkada = mongoose.model('XogtaShirkada', xogtaShirkadaSchema, 'xogtaShirkada');

module.exports = XogtaShirkada;
