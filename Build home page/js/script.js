$(document).ready(function () {


	//START ACCORDION FUNCION
	  $(function() {
	    var icons = {
	      header: "accordion_cross",
	      activeHeader: "accordion_cross_active"
	    };
	    $( "#accordion" ).accordion({
	      icons: icons
	    });
	    $( "#toggle" ).button().click(function() {
	      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
	        $( "#accordion" ).accordion( "option", "icons", null );
	      } else {
	        $( "#accordion" ).accordion( "option", "icons", icons );
	      }
	    });
  });

	//END ACCORDION FUNCTION
	

	//START SLIDER

	
	
	$('.slider_class').slick({
    	  slidesToShow: 1,
  		  slidesToScroll: 1,
  		  autoplay: true,
  		  autoplaySpeed: 5000,
  		  dots:true,

  	});

	$('.slick-dots').css({'bottom':'20px', 'z-index':'1000'});


	

	//END SLIDER

	$('.darken').hover(function() {
    	$(this).find('img').fadeTo(500, 0.3);
    	$(this).parent().find('.service_link').addClass('on').removeClass('service_link');

}, function() {
    $(this).find('img').fadeTo(500, 1);
    $(this).parent().find('.on').removeClass('on').addClass('service_link');



 });


});