  var app = require('../js/app.js');

  describe("sayHello", function() {
    it("it should run sayHello method", function() {

    	//prepare
    	var result;

    	//act
    	result = app.sayHello('vasya');
    	//assert

      expect(result).toBe('Hello vasya!');
    });


    
    it("pow method", function() {

    	//prepare
    	var result;

    	//act
    	result = app.pow(2, 1);
    	//assert

      expect(result).toBe('The answer is: 2');

    });

    it("pow method", function() {

      //prepare
      var result;

      //act
      result = app.pow(2, 2);
      //assert

      expect(result).toBe('The answer is: 4');

    });

      it("pow method", function() {

      //prepare
      var result;

      //act
      result = app.pow(2, 3);
      //assert

      expect(result).toBe('The answer is: 8');

    });

});

