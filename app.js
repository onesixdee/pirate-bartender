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






var strongIngredients = function() {
	Bartender.call(this, ['Glug of rum', 'Slug of whisky', 'Splash of gin']);

var saltyIngredients = [{
	'Olive on a stick',
	'Salt-dusted rim', 
	'Rasher of bacon'
}]

var bitterIngredients = [{
	'Shake of bitters',
	'Splash of tonic', 
	'Twist of lemon peel'
}]

var sweetIngredients = [{
	'Sugar cube',
	'Spoonful of honey',
	'Splash of cola'
}]

var fruityIngredients = [{
	'Slice of orange',
	'Dash of cassis',
	'Cherry on top'
}]

var pantryItems = [{
	
}]


Bartender.prototype.createDrink = function(){
	if () {

	}

}


// Objects

var strongIngredients = new BartenderDrink(['Glug of rum', 'slug of whisky', 'splash of gin']);



//Method 
