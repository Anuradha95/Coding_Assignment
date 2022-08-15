const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classSchema = new Schema({
    className: { type: String, unique: true, minlength: 3},
    moduleEnum: { type: String, unique: true},
    classPw : { type: String, unique: true}, 
    studentList: [{
        type: String
    }] 

}, {
  timestamps: true,
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;