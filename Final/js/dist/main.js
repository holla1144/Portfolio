jQuery(document).ready(function() {

	var generateRandom = function(min, max) {
						var rand = Math.floor(Math.random() * (max - min)) + min;
						return rand; 
					}; 



	$('.slider').slick({
		arrows: true, 
		draggable: false
		
	});


	$('.slick-arrow').addClass('custom-arrow');
	$('.slick-arrow').removeClass('slick-arrow');
	$('.slick-prev').addClass('custom-arrow-left');
	$('.slick-next').addClass('custom-arrow-right');
	$('.slick-prev').html('');
	$('.slick-next').html('');

	$('.grid').masonry({
 
  		itemSelector: '.grid-item',
  		columnWidth: '.grid-sizer',
  		gutter: '.gutter-sizer', 
  		percentPosition: true
	});

	

	 $('#partner-search-submit').on('click', function(e){
	 	e.preventDefault();
 		var searchTerm = $('#partner-search').val();
 		var API_KEY = '81d9e694fa94443eca77a3df318509ab';
		var URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=' + searchTerm + '&per_page=1000&extras=url_m&format=json&jsoncallback=?';
		$.getJSON(URL, function(results){

						var randset = [];
						for (i = 0; i < 7; i++) {
							var random = generateRandom(0, results.photos.perpage);
							randset.push(random);
						};

						var imgArray = [];
						for (i = 0; i < 7; i++) {
							imgArray.push(results.photos.photo[randset[i]].url_m);
					
						}
			
						var gridPics = $('.grid-item');
						console.log(gridPics);

						for (i = 0; i < 7; i++) {
							$(gridPics[i]).css({'background-image': 'url(' + imgArray[i] + ')'});
						}

				

					
				});

			});


 		var API_KEY = '81d9e694fa94443eca77a3df318509ab';
		var URL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=' + 'adventure' + '&per_page=1000&extras=url_m&format=json&jsoncallback=?';
		$.getJSON(URL, function(results){

						var randset = [];
						for (i = 0; i < 7; i++) {
							var random = generateRandom(0, results.photos.perpage);
							randset.push(random);
						};

						var imgArray = [];
						for (i = 0; i < 7; i++) {
							imgArray.push(results.photos.photo[randset[i]].url_m);
					
						}
			
						var gridPics = $('.grid-item');
						console.log(gridPics);

						for (i = 0; i < 7; i++) {
							$(gridPics[i]).css({'background-image': 'url(' + imgArray[i] + ')'});
						}

				});
	})