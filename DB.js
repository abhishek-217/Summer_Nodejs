// A file which is reponsible for establishing connection between Node.jd and MpngoDB 
// With the help of Mongoose

const mongoose = require("mongoose");
require('dotenv').config();

// STEP:01

// Definr MongoDB Connection URL

// const mongoURL = process.env.DB_URL_LOCAL ; //For Own copmputer Connection

// Use when connect with Atlas
const mongoURL = process.env.DB_URL ; //When host to atlas and use


// STEP: 02
// Set MongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser :true,
    useUnifiedTopology: true
})


// Get the default connection

const db = mongoose.connection;


// STEP: 03
//  Event Listener tell user about db connection

db.on('connected', () => {
    console.log('Connected to mongoDB Server');
});
db.on('disconnected', () => {
    console.log('Disconnected to mongoDB Server');
});
db.on('error', (err) => {
    console.log('Connected to mongoDB Server', err);
});



// Export the Database connection

module.exports = db;
