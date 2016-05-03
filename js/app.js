'use strict'

$(function() {

	var displayQuestion = $('.question')
	var questionIndex = 0;


// Questions constructor function with question argument
var Questions = function(question){
	this.question = question;
};

// Questions.prototype.createDrink = function(preferences) {

// }
// bartenderQuestions object
var bartenderQuestions = new Questions([
	"Do ye like yer drinks strong?",
	"Do ye like it with a salty tang?",
	"Are ye a lubber who likes it bitter?",
	"Would ye like a bit of sweetness with yer poison?",
	"Are ye one for a fruity finish?"
])
console.log(bartenderQuestions.question)


// display first question on pageLoad
displayQuestion.append(bartenderQuestions.question[questionIndex])


	$('.next-btn').click(function(){
		console.log("next button clicked")
		questionIndex++;
		console.log(questionIndex)
		displayQuestion.empty()
		displayQuestion.append(bartenderQuestions.question[questionIndex])
	})


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




}) // end function

