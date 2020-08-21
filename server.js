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










app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});