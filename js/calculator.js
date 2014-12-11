
// declaring my variables

var firstVal, 
	secondVal, 
	operation, 
	result,
	isFirstVal = true;

var $numberButtons = $('.number');
var display = $('#display');
var clear = $('#clear');
var back = $('#back');
var divide = $('#divide');
var times = $('#times');
var minus = $('#minus');
var plus = $('#plus');
var decimal = $('#decimal');
var equals = $('#equals');

// set the first and second values

function setFirstVal() {
	firstVal = display.html();
	console.log( 'the first value is ', firstVal );
}

function setSecondVal() {
	secondVal = display.html();
	console.log( 'the second value is ', secondVal );
}

function setVal() {
	
}


// display numbers that are being clicked on and set them as first val

$('#calculator').on('click', '.number', function enterFirstVal(event) {
	var $element = $(this);
	var value = $element.data('value');
	display.append(value);
	value = firstVal;
	console.log(firstVal);

	if( isFirstVal == true ) {
		firstVal = display.html();
	}
	else {
		secondVal = display.html();
	}

	console.log('first click handler');
});


// tie plus minus times and divide to + - * and / when clicked on

$('#calculator').on('click', '.operation', function(event) {
	var $element = $(this);
	operation = $element.data('operation');
	display.html(' ');
	console.log('you clicked this operation: ' + operation);

	if( isFirstVal == true ) {
		isFirstVal = false;
	}
	else {
		isFirstVal = true;
	}

	// if numbers are clicked on after plus minus times or divide set second value

	// $('#calculator').on('click', '.number', function(event) {
	// 	var $element = $(this);
	// 	var value = $element.data('value');
	// 	display.append(value);
	// 	value = secondVal;
	// 	console.log(secondVal);
	// 	setSecondVal();
	// 	console.log('second click handler');
	// });

});

// when clear button is clicked display nothing

function clearCalc() {
	clear = display.html();
	firstVal = 0;
	secondVal = 0;
	console.log( 'calculator has been cleared');
}

clear.on('click', function() {
	console.log( 'clear button clicked' );
	display.html( '' );
	clearCalc();
});


// if plus minus divide or times is clicked make the next number entered be second value

// if ($'.operation'.on('click')){
// 	firstVal = false;
// 	console.log(firstVal)
// }


// set up the calculation of first and second val

function doCalc(first, second, op) {
	console.log('first:', first, 'second:', second, 'op:', op);

	switch (op) {
		case '+':
			return first + second;
			break;
		case '-':
			return first - second;
			break;
		case '*':
			return first * second;
			break;
		case '/':
			return first / second;
			break;
	}
}

// when equals is clicked show my result

function showResult() {
	result = display.html();
	console.log( 'result is shown');
}

equals.on('click', function() {
	console.log( 'equals button clicked' );
	
	result = doCalc(firstVal, secondVal, operation);
	display.html(result);

	isFirstVal = true;

	/*
	console.log('doCalc has been called');
	showResult();
	console.log('showResult has been called');
	display.html(result);
	*/
});





/**
Homework:
- include this file in the HTML
- For the below exercises, use the 'doCalc' function we created
- in your browser console:
  - run doCalc and add two numbers
  - run doCalc and subtract two numbers
  - run doCalc and multiply two numbers
  - run doCalc and divide two numbers

- For the calculator interface you've built so far:
  - when you click on the 'plus' button, display firstVal + secondVal in the console
  - when you click on the 'minus' button, display firstVal - secondVal in the console
  - when you click on the 'multiply' button, display firstVal * secondVal in the console
  - when you click on the 'divide' button, display firstVal / secondVal in the console

- For the calculator interface you've built so far:
  - try getting the plus, minus, multiply, divide event bindings/callbacks into one function rather than
    having them as separate event bindings in your code (to get the above working)
    (hint: you'll need to change some stuff in your HTML)
*/