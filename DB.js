// A file which is reponsible for establishing connection between Node.jd and MpngoDB 
// With the help of Mongoose

const mongoose = require("mongoose");

// STEP:01

// Definr MongoDB Connection URL

const mongoURL = 'mongodb://127.0.0.1:27017/hotels' ; //For Own copmputer Connection

// Use when connect with Atlas
// const mongoURL = 'mongodb+srv://@cluster0.kerjnhf.mongodb.net/'


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
