$(function(){
	$( ".cross" ).hide();
	$( ".menu2" ).hide();
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