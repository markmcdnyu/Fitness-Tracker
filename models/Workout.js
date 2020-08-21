const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    //need type
    type: String,
    //need name
    name: String,
    //need duration
    duration: Number,
    //need distance
    distance: Number,
    //need weight
    weight: Number,
    //need reps
    reps: Number,
    //need sets
    sets: Number,
});


const WorkoutSchema = new Schema({
    // need day

    //need type of date

    //use date.now

});

//compile the model with the necessary info
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;