var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");

function basicCardCreate(){
	inquirer.prompt([{
    name: "title",
    type: "input",
    message: "Please enter a title for this card."
  }, {
    name: "textFront",
    type: "input",
    message: "What text would you like on the front?"
  }, {
    name: "textBack",
    type: "input",
    message: "What text would you like on the back?",
    // validate: function(value) {
    //   if (isNaN(value) === false) {
    //     return true;
    //   }
    //   return false;
    // }
  }]).then(function(answer) {
    // when finished prompting
    var newCard = new BasicCard(answer.textFront,answer.textBack)
    //TODO FROM HERE set title of newCard with reference to answer.title
      console.log("Your card was created successfully!");
      console.log(newCard.front);
      console.log(newCard.back); 
      cardChoice();
    });
 };

function clozeCardCreate(){
	inquirer.prompt([{
    name: "title",
    type: "input",
    message: "Please enter a title for this card."
  }, {
    name: "textFull",
    type: "input",
    message: "What is the full text for this flashcard?"
  }, {
    name: "textCloze",
    type: "input",
    message: "Which section of the text would you like to remove from the full flashcard text?",
    // validate: function(value) {
    //   if (isNaN(value) === false) {
    //     return true;
    //   }
    //   return false;
    // }
  }]).then(function(answer) {
    // when finished prompting
    var newCard = new ClozeCard(answer.textFull,answer.textCloze)
    //TODO FROM HERE set title of newCard with reference to answer.title
    if (newCard.fullText === newCard.partial){
      cardChoice();//error message is alreadyshown in constructor, so just resets to beginning here.
    }
    else{
      console.log("Your card was created successfully!");
      console.log(newCard.fullText);
      console.log(newCard.cloze); 
      console.log(newCard.partial);
      cardChoice();
    }
    });
 };


function cardChoice(){
inquirer.prompt({
    name: "basicOrCloze",
    type: "rawlist",
    message: "Would you like to create a [BASIC] flashcard or a [CLOZE] flashcard?",
    choices: ["BASIC", "CLOZE"]
  }).then(function(answer) {
    if (answer.basicOrCloze.toUpperCase() === "BASIC") {
      basicCardCreate();
    }
    else {
      clozeCardCreate();
    }
});
}

cardChoice();



//---***BELOW IS THE TEST SCRIPT (comment all functions above (NOT THE REQUIRED FILES), then uncomment the following and run to test that constructors work)***---

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 	

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText);

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

