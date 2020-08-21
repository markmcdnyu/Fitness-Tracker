// express here for setup 
const express = require("express");

// morgan to see requests
const logger = require("morgan");

//mongoose to handle request database
const mongoose = require("mongoose");

// require path here
const path = require("path");

// PORT here 
const PORT = process.env.PORT || 3000;

// require content from models folder 
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route for the public folder here
app.use(express.static("public"));

//Need the mongoose workout db (and needed for deployment)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// HTML ROUTES will go here

//index/html page here
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

//exercise page
app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
});

//stats page


// API routes here




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});