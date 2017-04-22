var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");




var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");


// // Hold the value whether someone is an "admin" or "user"
// var loginType = process.argv[2];

// // If they are a user... they will also need to provide a "name"
// var userName = process.argv[3];

// // And they will need to provide a "location"
// var userLocation = process.argv[4];

// // Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
// var myAdmin = new WeatherAdmin();

// if (loginType === "admin") {

//   myAdmin.getData();

// }

// else {

//   myAdmin.newUserSearch(userName, userLocation);

// }