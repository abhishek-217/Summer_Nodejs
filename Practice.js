// JavaScript REvision 

// console.log("Hello Node js");

// function add(a,b){
//     return a+b;
// }

// var res = add(2,6);
// console.log(res);


// 1st option


// function callback(){
//     console.log("After add function , Callback function called");
// }

// var add = function(a,b, callback){
//     var res = a+b;
//     console.log("result :", res);

//     callback();
// }

// 2nd

// add(56,4658,function(){
//     console.log("Add complete callback is here");
// });

// 3rd

// add(564,453, ()=> console.log("Add Done sir callback"));





// Use different librarie like File System & Operating Sysytem

// var fs = require('fs');

// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile("greet.txt", 'Hii ' + user.username + '!\n', () => console.log('Work Done !!')); 


// console.log(os);  //To know all uses of OS library




//  Import Files

// const note = require('./notes.js');

// var age = note.age;
// const add = note.add(age, 14);

// console.log(age);
// console.log(add);


// Lodash Libraries

var _ = require('lodash');

var data = ["Abhi", 's',4,6,7, 'Abhi',4,5,7,'2'];

var filter = _.uniq(data);
console.log(filter);