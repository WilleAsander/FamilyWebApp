const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv/config');

//Import routes
const notesRoute = require('./routes/notes');
const groceriesRoute = require('./routes/groceries');
const todoRoute = require('./routes/todo');

app.use('/notes', notesRoute);
app.use('/groceries', groceriesRoute);
app.use('/todo', todoRoute);

//Conect to MongoDB
mongoose.connect(
    process.env.DB_CONNECTION,
    mongoose.set('strictQuery', true), 
    () => console.log("Connected to Database!")
);

//Fetch data from the API
app.get("/api", (req, res) => {
    res.json({"users": ["UserOne", "UserTwo", "UseThree","UserFour"]})
});

//Start the server
app.listen(5000, () => {console.log("Server started on port 5000")});