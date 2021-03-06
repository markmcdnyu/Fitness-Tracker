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
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds351455.mlab.com:51455/heroku_8nzjc6hn", { useNewUrlParser: true });

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
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
});


// API routes here
// get all the workouts
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((response) => {
            res.json(response);
        })
        .catch((err) => {
            res.json(err.message);
        });
});

// update a specific workout
app.put("api/workouts/:id", async (req, res) => {
    db.Workout.update(
        { _id: mongoose.Types.ObjectId(req.params.id) },
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then((data) => res.json(data))
        .catch((err) => res.json(err));

});


// create a new workout 
app.post("api/workouts", async ({ body }, res) => {
    try {
        let data = await db.Workout.create(body)
        console.log({ data });
        res.json(data);
    } catch ({ message }) {
        res.json(message);
    }
});

// get a number of workouts from the past
app.get("/api/workouts/range", async (req, res) => {
    try {
        let data = await db.Workout.find({}).sort({ day: -1 }).limit(7)
        res.json(data);
    } catch {
        res.json(error);
    }
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});