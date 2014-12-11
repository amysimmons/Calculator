var number9 = $('#number9');
var number8 = $('#number8');
var number7 = $('#number7');
var number6 = $('#number6');
var number5 = $('#number5');
var number4 = $('#number4');
var number3 = $('#number3');
var number2 = $('#number2');
var number1 = $('#number1');
var number0 = $('#number0');
var clear = $('#clear');
var back = $('#back');
var divide = $('#divide');
var times = $('#times');
var minus = $('#minus');
var plus = $('#plus');
var equals = $('#equals');
var decimal = $('#decimal');
var display = $('#display');

var action = plus, minus, times, divide;

var newValue;

var action;

var nextValue;

var result;

function setNewValue() {
	newValue = display.html();
	console.log( 'the new value is ', newValue );
}

function setNextValue() {
	nextValue = display.html();
	console.log( 'the next value is ', nextValue );
}
	
function takeAction() {

	switch (action.on('click')) {
		case 0: 
			plus = "+";
			console.log('calculator is adding');
			break;
		case 1:
			minus = "-";
			console.log('calculator is subtracting');
			break;
		case 2:
			times = "*";
			console.log('calculator is multiplying');
			break;
		case 3:
			divide = "/";
			console.log('calculator is dividing');
			break;
	}
}


// function takeAction() {


// 	// if (plus.on('click')){
// 	// 	display.html( '' );
// 	// 	newValue + nextValue;
// 	// 	console.log('calculator is adding');
// 	// }
// 	// else if (minus.on('click')){
// 	// 	display.html( '' );
// 	// 	newValue - nextValue;
// 	// 	console.log('calculator is subtracting');
// 	// }
// 	// else if (times.on('click')){
// 	// 	display.html( '' );
// 	// 	newValue * nextValue;
// 	// 	console.log('calculator is multiplying');
// 	// }
// 	// else if (divide.on('click')){
// 	// 	display.html( '' );
// 	// 	newValue / nextValue;
// 	// 	console.log('calculator is dividing');
// 	// }

// }

function clearCalc() {
	clear = display.html();
	console.log( 'calculator has been cleared');
}

function getResult() {
	result = display.html();
	console.log('the result is ', result);
}



number9.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '9' );
	setNewValue();
});

number8.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '8' );
	setNewValue();
});

number7.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '7' );
	setNewValue();
});

number6.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '6' );
	setNewValue();
});

number5.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '5' );
	setNewValue();
});

number4.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '4' );
	setNewValue();
});

number3.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '3' );
	setNewValue();
});

number2.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '2' );
	setNewValue();
});

number1.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '1' );
	setNewValue();
});

number0.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.append( '0' );
	setNewValue();
});

clear.on('click', function() {
	// even handler OR callback
	console.log( 'button clicked' );
	display.html( '' );
	clearCalc();
});

plus.on('click', function() {
	// even handler OR callback
	console.log( 'plus button clicked' );
	display.html( '' );
	takeAction();
});

minus.on('click', function() {
	// even handler OR callback
	console.log( 'minus button clicked' );
	display.html( '' );
	takeAction();
});

times.on('click', function() {
	// even handler OR callback
	console.log( 'times button clicked' );
	display.html( '' );
	takeAction();
});

divide.on('click', function() {
	// even handler OR callback
	console.log( 'divide button clicked' );
	display.html( '' );
	takeAction();
});


equals.on('click', function() {
	console.log( 'equals button clicked' );
	getResult();
	display.html(result);
});


// converting the string of newValue to an interger

var myString = newValue;

var myInteger;

myInteger = parseInt(myString);





console.log(action);

/**
	Exercise:
	1. Draw the layout we discussed on the paper
	2. Get all the number buttons to work
	3. Find the best way to convert the 'string' of newVal into an integer
	4. (optional) - find a way to improve the code. Hint: what are you doing repetative, and how can you make it not so repetative. Referred to as 'refactoring'
*/



// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }
