const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ESSdb", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


const adminRouter = require('./routes/Administrator');
app.use('/admin', adminRouter);

const instructorRouter = require('./routes/Instructor');
app.use('/instructor', instructorRouter);

const studentRouter = require('./routes/Student');
app.use('/student', studentRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});