requirejs.config({
		paths: {

			'jquery': 'https://code.jquery.com/jquery-2.2.4'

		},

		shim: {

			'jquery': {

				exports: 'jQuery'
			}

		}

	});


require(
	[

	'model',
	 'view', 
	 'controller',
	 'jquery',
	 'template'

	],

	function (Model, View, Controller, $, template) {
		
			var firstToDoList = ['learn Javascript', 'learn html', 'make coffee'];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);
	

		

	}

);