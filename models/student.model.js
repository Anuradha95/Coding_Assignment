const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    studentName: { type: String, minlength: 3},
    studentClass: { type: String},
    studentPw: { type: String},
    moduleEnum: { type: String}
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;