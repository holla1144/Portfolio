var app = {

	sayHello: function (name) {
		return 'Hello ' + name + "!"; 

	},

	pow: function (number, step) {

		if (step === 1) {
			return 'The answer is: ' + number;
		} else if (step === 0) {
			return 'The answer is 1';
		} else if (step === 2) { 
			var answer = number * number;
			return 'The answer is: ' + answer;
		} else {
			var initialNumber = number;
			for(i = 0; i < step - 1; i++) {
				number *= initialNumber;
			}

			return 'The answer is: ' + number;

		};
	}
}




module.exports = app;