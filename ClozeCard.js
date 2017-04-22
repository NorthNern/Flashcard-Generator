

function ClozeCard (text, cloze) {
	this.cloze = cloze;
	this.fullText = text;
	var clozePosition = text.search(cloze);
	if (clozePosition === -1){ 
		//TODO throw error
		console.log("ERROR: ClozeCard could not be created because '" + cloze + "' was not found in '" + text + "'");
		this.partial = text;
	}
	else {
		var tempTextArray = text.split("");
		tempTextArray.splice(clozePosition, cloze.length, "?","?","?");
		this.partial = tempTextArray.join("");
	}
}



	
module.exports = ClozeCard;



// var fs = require("fs");
// var UserSearch = require("./UserSearch");

// var WeatherAdmin = function() {
  
//   this.getData = function(){
//     fs.readFile("log.txt", "utf8", function(error, data){

//       console.log(data);

//     });  
//   };

//   this.newUserSearch = function(name, location) {

//     var newUserSearch = new UserSearch(name, location);
//     var logTxt = "\nName: " + newUserSearch.name + " Location: " + newUserSearch.location + 
//                   " Date: " + newUserSearch.date;

//     fs.appendFile("log.txt", logTxt);

//     newUserSearch.getWeather();

//   };

// };

// module.exports = WeatherAdmin;




// var WeatherAdmin = require("./WeatherAdmin");

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

