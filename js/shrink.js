$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 500) {
    	$('#navig').addClass('fixed-top');
        $('#navig').removeClass('sticky-top');
    }
    else {
        $('#navig').addClass('sticky-top');
        $('#navig').removeClass('fixed-top');
    }
  });
});