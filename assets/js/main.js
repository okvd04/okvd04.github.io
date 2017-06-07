$(document)
    .ready(function() {

        // scroll body to 0px on click
      	$('.l-scroller').click(function () {
      		$('body,html').animate({
      			scrollTop: 0
          }, 400);
      			return false;
      		});
      // End scroll toTop
      
    });
