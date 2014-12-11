var $numberButtons = $('.number'); // good practice to use a dollar-sign to denote that a variable is a jQuery DOM element/s

$numberButtons.on('click', function(e) {
	e.stopPropagation(); // stop the DOM event from bubbling up the DOM to parent elements

	console.log( 'inside the click:', this ); // return the DOM element that this event was triggered on

	var $element = $(this); //casts the native DOM element into a jQuery DOM element
	var value = $element.data('value'); // tells jQuery to get the value of the data-value attribute of the DOM element
	//var elementDataValue = $element.attr('data-value'); // tells jQuery to get the value of the data-value attribute of the DOM element

});

// to the DOM element with ID 'calculator' i am binding the click event. I only want to run the callback function on elements that have the class 'number'
$('#calculator').on('click', '.number', function(event) {
	var $element = $(this); //casts the native DOM element into a jQuery DOM element
});


/**
Notes:
- When working with JQuery callbacks, the reserved variable 'this' refers to the current native DOM element
  the event was triggered on
- When a DOM event is fired on an element (such as 'click'), that event is triggered on all the parent elements
  in the DOM, all the way up to 'document'. This is called 'event bubbling', since the events bubble up the DOM
*/