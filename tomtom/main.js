$(function(){
	var nav = $(".main-nav");
	var top = nav.offset().top;
	var nav2 = $(".main-nav-placeholder");
	$( ".cross" ).hide();
	$( ".menu2" ).hide();
	
	$(document).scroll(function() {
		if($(document).width() > 700){
		    if ( $(this).scrollTop() > top) {
		        nav.addClass("navbar-fixed");
		        nav2.show();
		    } else {
		        nav.removeClass("navbar-fixed");
		        nav2.hide();
		    }
		}else{
			nav2.hide();
		}
	});

	$( ".hamburger" ).click(function() {
		$( ".menu2" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".menu2" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		});
	});
});