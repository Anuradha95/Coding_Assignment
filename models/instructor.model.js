const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instructorSchema = new Schema({
    instructorName: { type: String, unique: true, minlength: 3},
    instructorPw: { type: String, unique: true},  
}, {
  timestamps: true,
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;