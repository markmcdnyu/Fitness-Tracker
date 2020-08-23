const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    // need day
    day: {
        //need type of date
        type: Date
    },
    // add in the exercies and include the ExerciseSchema from above, 
    //then we will just need to include the WorkoutSchema and export it 
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise",
    },
    ],

});

//compile the model with the necessary info
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;