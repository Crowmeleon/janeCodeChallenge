const mongoose = require('mongoose');
const { Schema } = mongoose;

const Note = new Schema({
    Title: String,
    Description: String,
    Author: String
});

mongoose.model('Note', Note);