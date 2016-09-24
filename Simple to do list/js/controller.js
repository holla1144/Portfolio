define(
	'controller',
	['model', 'view', 'jquery'],

	function () {

		return function Controller(model, view, jquery) {
	
			var self = this;


			self.addItem = function () {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');

			}

			self.removeItem = function() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			}




			self.editMode = function () {

				
				view.elements.addBtn.off('click', self.addItem);
				var oldItem = $(this).siblings('.item-delete').attr('data-value');
				var oldIndex = model.data.indexOf(oldItem);
				$('input').val(oldItem);
				
				
				
				$('.item-add').on('click', function () {
					var newerItem = $('input').val();
					model.editItem(oldItem, newerItem)
					view.renderList(model.data);
					view.elements.addBtn.on('click', self.addItem);


				})

			}



		

			
		view.elements.addBtn.on('click', self.addItem);
		view.elements.listContainer.on('click', '.item-delete', self.removeItem);
		view.elements.listContainer.on('click', '.edit', self.editMode);
		
		


		};


}

)
