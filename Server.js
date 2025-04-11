// JSON represent string__ 
// JSON to Object

// const json = '{ "name" : "Abhishek Kumar", "age" : 21, "gender" : "male"}';

// const Jstob = JSON.parse(json);
// console.log(Jstob);

// // Object to JSON

// const stringi = {name : "Chotu", sub : "CSE", roll : 10350};

// const ObtoJ = JSON.stringify(stringi);


// console.log(ObtoJ);

// console.log(typeof Jstob);


// Starts from Here..............................................



// Create Server

const express = require('express')
const app = express();





// Examples 

// app.get('/litti', function (req, res) {
  //   res.send('Bihar mein baa ta e la litti chokha ..')
  // })
  
  // app.get('/biriyani', function (req, res) {
    //     var custom_biriyani = {
      //         name : "Chicken Biriyani",
      //         is_chutney : "true",
      //         want_salad : "yess with raita"
      //     }
      //   res.send(custom_biriyani)
      // })
      
      // app.post('/person', function(req,res){
//     res.send("Data is Saved ");
// })






// Connection via mongoose (Import fle DB)
const db = require('./DB');

// Person Model to store their data
// const person = require('./models/person');


// Menu database
const menu = require('./models/menu');

// BodyParser USE
const bodyparser = require('body-parser');

// JSON type data we use so call json function
app.use(bodyparser.json());

// app.get('/', function (req, res) {
//   res.send('Welcome! to Our first Server Sir ..')
// })





// Import router file

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use the routes

// app.use('/', personRoutes);  Normally this but want to remove person and write only one time here
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(3000, ()=>{
  console.log("Server Listening on 3000")
}) 