// Schema for person in database

const { uniqueId } = require('lodash');
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type : String,
        // required means ye hona hee hai otherwise not accept
        required: true  
    },
    age: {
        type: Number
    },
    work:{
        type: String,
        enum: ['chef','waiter', 'manager'],
        required : true
    },
    phone:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    address:{
        type : String,
    },

    salary:{
        type: Number,
        required:true
    }

    
});


// Crerate Person Model

const person = mongoose.model('person', personSchema);
module.exports = person;