const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    mongoose.set('strictQuery', true), 
    () => console.log("Connected to Database!")
);

app.get("/api", (req, res) => {
    res.json({"users": ["UserOne", "UserTwo", "UseThree","UserFour"]})
});

app.listen(5000, () => {console.log("Server started on port 5000")});