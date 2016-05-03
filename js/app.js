'use strict'

$(function() {

	var displayQuestion = $('.question')
	var questionIndex = 0;


// Questions constructor function with question argument
var Questions = function(question){
	this.question = question;
};

// bartenderQuestions object
var bartenderQuestions = new Questions([
	"Do ye like yer drinks strong?",
	"Do ye like it with a salty tang?",
	"Are ye a lubber who likes it bitter?",
	"Would ye like a bit of sweetness with yer poison?",
	"Are ye one for a fruity finish?"
])
console.log(bartenderQuestions.question)


//Ingredients constructor function with ingredients argument
var Ingredients = function(ingredients){
	this.ingredients = ingredients;
} 
// drinkIngredients object
var drinkIngredients = new Ingredients([
	"Glug of rum, slug of whisky, splash of gin",
	"Olive on a stick, salt-dusted rim, rasher of bacon",
	"Shake of bitters, splash of tonic, twist of lemon peel",
	"Sugar cube, spoonful of honey, splash of cola",
	"Slice of orange, dash of cassis, cherry on top"
])
console.log(drinkIngredients.ingredients)


// Pantry constructor function with pantry argument
var Pantry = function(pantry){
	this.pantry = pantry;
}
// pantryItems object
var pantryItems = new Pantry([
	'Rum', 'Whiskey', 'Gin', 'Olives', 'Salt', 'Lemon Peel', 'Tonic',
	'Bitters', 'Sugar Cube', 'Honey', 'Cola', 'Orange', 'Cassis', 'Cherry', 'Bacon'
	])
console.log(pantryItems.pantry)


// display first question on pageLoad
displayQuestion.append(bartenderQuestions.question[questionIndex])


//displays next question
$('.next-btn').click(function(){
	console.log("next button clicked")
	questionIndex++;
	console.log(questionIndex)
	$('#user-preferences').empty()
	displayQuestion.empty()
	displayQuestion.append(bartenderQuestions.question[questionIndex])
})


function yesIngredients(){
	if  (bartenderQuestions.question[questionIndex]) {
		document.getElementById("user-preferences").innerHTML = "We can " +drinkIngredients.ingredients[questionIndex];
	}
}

function noIngredients() {
	if (bartenderQuestions.question[questionIndex]) {
		document.getElementById("user-preferences").innerHTML = "No thanks";
	}
}

	$('.yes-btn').click(function() {
		yesIngredients()
	})

	$('.no-btn').click(function(){
		noIngredients()
	})


// preferences object for user input 

// createDrink method to take preferences object and construction new drink object by fetching randomly chosen ingredients from the pantry which matches the user's preferences

// bartender object - drink is created based on preferences
	//var bartender = new 


}) // end function

