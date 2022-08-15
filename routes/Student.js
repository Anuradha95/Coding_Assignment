const router = require('express').Router();
let Student = require('../models/student.model');

router.post('/login',async (req,res) =>{ 
    Student.findOne({studentName: req.body.name});
    if(!Student) return res.status(400).send('Name or Password not found');
    if(req.body.password, Student.studentPw) return res.status(400).send('Name or Password not found');
    res.send('loggedin...');
});

module.exports =router;