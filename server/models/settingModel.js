const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema({
  // emails , images , phones , logo , banner , breif
  slider: {
    type: [String],
    default: [],
  },
  email1 : String,
  phone1: String,
  email2 : String,
  phone2: String,
  name1 : String,
  name2 : String,
  intro1 : String,
  intro2 : String,
  carsCount : Number
});

const SettingSchema = mongoose.model('Setting', settingSchema);

module.exports = SettingSchema;

