const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const administratorSchema = new Schema({
    administratorName: { type: String, unique: true, minlength: 3},
    administratorPw: { type: String, unique: true},  
}, {
  timestamps: true,
});

const Administrator = mongoose.model('Administrator', administratorSchema);

module.exports = Administrator;