'use strict'

$(document).ready(function() {

	var displayQuestion = $('.question')
	var yesButton = $('.yes-btn')
	var noButton = $('.no-btn')
	var nextButton = $('.next-btn')
	var count = 0
	var questionIndex = 0
	// an array of user drinkIngredients preferences
	var drinkIngredientsRequested = []


	// Questions constructor function
	var Questions = function(question) {
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
	//console.log("BARTENDERQUESTIONS" + "\n" + bartenderQuestions.question)

	// Pantry constructor function
	var Pantry = function(pantry) {
		this.pantry = pantry;
	}
	// pantryItems object with key arrays
	var pantryItems = new Pantry({
		strong: ['Rum', 'Whiskey', 'Gin'],
		 salty: ['Olives', 'Salt', 'Bacon'],
		 bitter: ['Lemon Peel', 'Tonic', 'Bitters'],
		 sweet: ['Sugar Cube', 'Honey', 'Cola'], 
		 fruity: ['Orange', 'Cassis', 'Cherry'] 
	})
	//console.log(pantryItems.pantry.strong[0]) //rum
	
	// Ingredients constructor function
	var Ingredients = function(ingredients) {
		this.ingredients = ingredients;
	}
	//drinkIngredients object
	var drinkIngredients = new Ingredients([
		"strong",
		"salty",
		"bitter",
		"sweet",
		"fruity"
	])
	//console.log("DRINKINGREDIENTS" + "\n" + drinkIngredients.ingredients)


//displays drinkIngredients based on preferences and pushes preferences to array
function yesIngredients() {
	if  (bartenderQuestions.question[questionIndex]) {
			// pushing users preferences to the empty drinkIngredientsRequested array
			drinkIngredientsRequested.push(drinkIngredients.ingredients[questionIndex])
			document.getElementById("user-preferences").innerHTML = "You like your drinks " + drinkIngredients.ingredients[questionIndex];
	}
}
//display "no thanks"
function noIngredients() {
	if (bartenderQuestions.question[questionIndex]) {
			document.getElementById("user-preferences").innerHTML = "No thanks.";
	}
}

function endQuestions() {
	if (questionIndex == 5) {
			// displays user drink preferences
			var preferences = new Ingredients(drinkIngredientsRequested);
			//console.log(preferences) //ingredients array
			//console.log(preferences.ingredients[0]) // strong
			//console.log(pantryItems) // pantry object array 
			//console.log(pantryItems.pantry) // array of pantry
			//console.log(pantryItems.pantry[preferences.ingredients[0]][Math.floor(Math.random() * 3)]) // ["Rum", "Whiskey", "Gin"]
			var randomNumber = Math.floor(Math.random() * 3) 
			var createDrink = " "

			for (var i = 0 ; i < preferences.ingredients.length; i++) {
				 createDrink+= pantryItems.pantry[preferences.ingredients[i]][randomNumber] + "<br>"
					// console.log(createDrink)
				document.getElementById("question").innerHTML = "The Pirate Bartender made you a special cocktail with the following ingredients: " + "<br><br>" + createDrink;
			}
			yesButton.remove()
			noButton.remove()
			nextButton.remove()
			$('.intro').remove()
		}
	
}



//displays first question on page load
displayQuestion.append(bartenderQuestions.question[questionIndex]) 


yesButton.click(function(){
	yesIngredients()
	count++
	console.log(count)
})



noButton.click(function() {
	noIngredients()
	count++
	console.log(count)
})

//displays next question on click
$('.next-btn').click(function() {
	questionIndex++;
	console.log(questionIndex)
	$('#user-preferences').empty()
	displayQuestion.empty()
	displayQuestion.append(bartenderQuestions.question[questionIndex])
	endQuestions()	
})

}) // END DOM