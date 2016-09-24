define(
	'model', 
	['view', 'controller'], 
	function () {

		return function Model(data) {
			//add item pushes a new new item to data
			var self = this; 

			self.data = ['learn javascript', 'learn html', 'make coffee'];

			self.addItem = function (item) {
			if (item.length === 0) {
				return;
			} else if (self.data.indexOf(item) !== -1) {
				return; 

			}

			self.data.push(item);

			return self.data;


		};

		self.removeItem = function (item) {
			//remove item gets the index of an item passed to it from controller, then splices
			//the old list together without the removed item and retruns the new "data" list. 
			var index = self.data.indexOf(item);

			if (index === -1) {
				return;
			} 

			self.data.splice(index, 1);

			return self.data;
		};


		self.editItem = function(oldItem, newItem) {

			var index = self.data.indexOf(oldItem);

			if (index !== -1) {
    			self.data[index] = newItem;
}

			console.log(self.data);

		}

		



		}


		}


	);