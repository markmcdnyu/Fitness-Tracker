const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    //need type

    //need name

    //need duration

    //need distance

    //need weight

    //need reps

    //need sets
});


const WorkoutSchema = new Schema({
    // need day

    //need type of date

    //use date.now

});

//compile the model with the necessary info
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;