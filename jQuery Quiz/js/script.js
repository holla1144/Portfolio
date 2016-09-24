
//create an object with 3 questions. each question has three possible answers. each question has a correct answer.
//change content of dynamically created html on page to content in object
//create a 'scoring' function that adds correct answers together. 

"use strict";

$( () => {


	let content = {

		questions: [

		{
			question: "Who wrote jQuery?",
			options: ["Steve Jobs", "John Resig", "Dean Edwards"],

		}, 

		{
			question: "What is the difference between writing jQuery and $?",
			options: ["There is no difference. $ is shorter", "Writing jQuery gives you access to more functions than $", "Writing $ is syntactically incorrect"],
			
		}, 

		{
			question: "$(h1, div, p) does what?",
			options: ["Selects all p children of divs which are children of h1", "Selects all h1, div, and p elements","This expression is incorrect"], 
			
		},

		],

		answers: ["John Resig", "There is no difference. $ is shorter", "Selects all h1, div, and p elements"]
	};


	localStorage.setItem(content, JSON.stringify(content)); //we need to parse the JSON in order to translate this back into an object with arrays;

	let newCont = localStorage.getItem(content);

	let testCont = JSON.parse(newCont); //testCont is the parsed object from local storage

	let template = $("#test").html();

	let page = tmpl(template, testCont);


	$('#wrapper').append(page); //content for the template is added to the page. 

	

	$('#jquery_test').submit( (e) => { //submit form and save it to local storage
		e.preventDefault();

		let testArray = []; //creates an empty array that we will use for comparing user answers with correct answers. 

		let score = 0; 

		let $inputs = $('#jquery_test :checked'); //defines inputs as checked radio buttons

		let testForm = {}; //creates and empty object to store question - answer pairs

		let values = $inputs.each(function () { //loops through each member of the $inputs collection
			testForm[$(this).attr('name')] = ($(this).val()); //adds key 'question name' + value of answer
			testArray.push($(this).val()); //push user answers to array of user answers

		});

		localStorage.setItem('testForm', JSON.stringify(testForm)); //save stringified user answers to local storage. 



		for (let i = 0; i < testArray.length; i++) {
			if (testArray[i] == content.answers[i]) { //compare user answers with correct answers
				score += 1;
			};


		};

		if (score == 3) {
			$('#results').text('You Passed!');
		} else {
			$('#results').text('You Failed!');
		};

		let printScore = "<p id='printScore'>Your Final Score:" + " " + score + " " + "out of 3</p>"

		$('#results').append(printScore);



	 });

	


	$('#submit').click( () => {
		$('.modal').css('display', 'block');

	});

	$('.close').click( () => {
		$('.modal').css('display', 'none');

	});

	$('body').click( (event) => {
		let target = event.target;
		if (target.className == 'modal') {
			$('.modal').css('display', 'none');
		};


	});


});


