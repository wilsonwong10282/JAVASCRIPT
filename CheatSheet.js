var speed = 70;


if (speed >80) {

	console.log("slow down")
//If the speed is >80 then "slow down" is displayed.
}
else {

console.log("drive safe")
//If the speed is not >80 then "drive safe" is displayed.

alert("Hi");
console.log("Hi");
//"Hi" will appear on a pop-up screen.
var myName = "Kyle";
console.log(myName);
//variable for myName will be displayed.

if ( 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}
//"The statement is false" will be displayed because 3 does not === 0.

function addTwenty(x){
return x + 20;
//declaring the function addTwenty will add twenty to x.
console.log(addTwenty(5));
//the sum of 20 of a number will be displayed

function checkFood(food){
	var food = ["chicken", "beef", "fish", "lamb", "veal"];

	//The first term starts with 0

	if(food == food[0] || food == food[1] || food == food[2] || food == food[3] || food == food [4]){
		alert("You are considered as meat");
	}else{
		alert("You may or may not be considered as meat");
	//if chicken, beef, fish, lamb or veal is entered, then a popup will appaer with "You are considered as meat"
	//if something else is entered, then a popup will appear saying "you may or may not be considered as meat"	
	}
}
