const router = require('express').Router();
let Class = require('../models/class.model');
let Student = require('../models/student.model');
let Instructor = require('../models/instructor.model');

router.post('/login',async (req,res) =>{ 
    Instructor.findOne({instructorName: req.body.name});
    if(!Instructor) return res.status(400).send('Name or Password not found');
    if(req.body.password, Instructor.instructorPw) return res.status(400).send('Name or Password not found');
    res.send('loggedin...');
});

router.post('/class_create',(req,res) =>{
  const className = req.body.className;
  const moduleEnum = req.body.moduleEnum;
  const classPw = Math.random().toString(36).slice(2, 10);
  const studentList = req.body.studentList;

  const newClass = new Class({
    className,
    moduleEnum,
    classPw,
    studentList
  });

  for (let i = 0; i < studentList.length; i++) {
    const studentName = studentList[i];
    const studentClass = className;
    const studentPw = classPw;

      const newStudent = new Student({
        studentName,
        studentClass,
        studentPw,
        moduleEnum
      });    
      newStudent.save();
  }


  newClass.save()
  .then(() => res.json('Class added!, Class Password is :'+ classPw))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports =router;