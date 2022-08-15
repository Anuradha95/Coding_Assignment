const router = require('express').Router();
let Instructor = require('../models/instructor.model')

router.post('/register',(req,res) =>{
  const administratorName = req.body.administratorName;
  const administratorPw = req.body.administratorPw;

  const newAdministrator = new Administrator({
    administratorName,
    administratorPw
  });

  newAdministrator.save()
  .then(() => res.json('Administrator added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/instructor_create',(req,res) =>{
  const instructorName = req.body.instructorName;
  const instructorPw = Math.random().toString(36).slice(2, 10)

  const newInstructor = new Instructor({
    instructorName,
    instructorPw
  });

  newInstructor.save()
  .then(() => res.json('Instructor added!, Password is :'+ instructorPw))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports =router;