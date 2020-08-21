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
    day: {
        //need type of date
        type: Date,
        //use date.now
        default: Date.now,
    },
    // add in the exercies and include the ExerciseSchema from above, 
    //then we will just need to include the WorkoutSchema and export it 
    exercises: [ExerciseSchema]

});

//compile the model with the necessary info
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;