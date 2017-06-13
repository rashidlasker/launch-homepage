$(function(){
	// var options = [
	//     ["a CIO"],
	//     ["a talent accelerator"],
	//     ["a non-profit"],
	//     ["fun"],
	//     ["professional"],
	//     ["a startup hub"],
	//     ["for education"]
	// ];

	// var interval = 4000;

	// var holder1 = $(".holder-1");
	// var currentIndex = 0;

	// function doIt() {
	// 	holder1.fadeIn(2000);
	//     holder1.html(options[currentIndex][0]);
	//     currentIndex = (currentIndex + 1) % options.length;
	//     holder1.fadeOut(2000);
	//     setTimeout(doIt, interval);
	// }
	// doIt();

	//smoothscrolling
	$("nav").find("a").click(function(e) {
	    e.preventDefault();
	    var section = $(this).attr("href");
	    $("html, body").animate({
	        scrollTop: $(section).offset().top -60
	    },500, 'easeInOutExpo');
	});

	//nav highlighting
	var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
        var navHeight = 69.5;

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos + navHeight >= divPos && windowPos + navHeight< (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("activenav");
            } else {
                $("a[href='" + theID + "']").removeClass("activenav");
                $("a[href='" + theID + "']").blur()
            }
        }

        if(windowPos + windowHeight + 50>= docHeight) {
            if (!$("nav li:last-child a").hasClass("activenav")) {
                var navActiveCurrent = $(".activenav").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("activenav");
                $("nav li:last-child a").addClass("activenav");
            }
        }
    });

	$('.carousel').carousel()
	// $('.tlt').textillate({
	// 	in: {
	// 	    // set the delay factor applied to each consecutive character
	// 	    delayScale: 1.5,

	// 	    // set the delay between each character
	// 	    delay: 50,

	// 	    // set to true to animate all the characters at the same time
	// 	    sync: true,
	// 	    // callback that executes once the animation has finished
	// 	    callback: function () {}
	// 	}
	// });

	//rotate text
	$("#js-rotating").Morphext({
	    // The [in] animation type. Refer to Animate.css for a list of available animations.
	    animation: "fadeIn",
	    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
	    separator: ",",
	    // The delay between the changing of each phrase in milliseconds.
	    speed: 4000,
	    complete: function () {
	        // Called after the entrance animation is executed.
	    }
	});

	//descriptions
	$( ".is1" ).hover(
	  function() {
	   $( ".software-captions" ).removeClass( "cap" );
	   $( ".sc1" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc1" ).fadeOut( 200 );
	    $( ".software-captions" ).addClass( "cap" );
	  }
	);

	$( ".is2" ).hover(
	  function() {
	   $( ".software-captions" ).removeClass( "cap" );
	   $( ".sc2" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc2" ).fadeOut( 200 );
	    $( ".software-captions" ).addClass( "cap" );
	  }
	);

	$( ".is3" ).hover(
	  function() {
	   $( ".software-captions" ).removeClass( "cap" );
	   $( ".sc3" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc3" ).fadeOut( 200 );
	    $( ".software-captions" ).addClass( "cap" );
	  }
	);

	$( ".is4" ).hover(
	  function() {
	   $( ".skills-captions" ).removeClass( "cap" );
	   $( ".sc4" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc4" ).fadeOut( 200 );
	    $( ".skills-captions" ).addClass( "cap" );
	  }
	);

	$( ".is5" ).hover(
	  function() {
	   $( ".skills-captions" ).removeClass( "cap" );
	   $( ".sc5" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc5" ).fadeOut( 200 );
	    $( ".skills-captions" ).addClass( "cap" );
	  }
	);

	$( ".is6" ).hover(
	  function() {
	   $( ".skills-captions" ).removeClass( "cap" );
	   $( ".sc6" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc6" ).fadeOut( 200 );
	    $( ".skills-captions" ).addClass( "cap" );
	  }
	);

	$( ".is7" ).hover(
	  function() {
	   $( ".skills-captions" ).removeClass( "cap" );
	   $( ".sc7" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc7" ).fadeOut( 200 );
	    $( ".skills-captions" ).addClass( "cap" );
	  }
	);

	$( ".is8" ).hover(
	  function() {
	   $( ".curriculum-captions" ).removeClass( "cap" );
	   $( ".sc8" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc8" ).fadeOut( 200 );
	    $( ".curriculum-captions" ).addClass( "cap" );
	  }
	);

	$( ".is9" ).hover(
	  function() {
	   $( ".curriculum-captions" ).removeClass( "cap" );
	   $( ".sc9" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc9" ).fadeOut( 200 );
	    $( ".curriculum-captions" ).addClass( "cap" );
	  }
	);

	$( ".is10" ).hover(
	  function() {
	   $( ".curriculum-captions" ).removeClass( "cap" );
	   $( ".sc10" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc10" ).fadeOut( 200 );
	    $( ".curriculum-captions" ).addClass( "cap" );
	  }
	);

	$( ".is11" ).hover(
	  function() {
	   $( ".perks-captions" ).removeClass( "cap" );
	   $( ".sc11" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc11" ).fadeOut( 200 );
	    $( ".perks-captions" ).addClass( "cap" );
	  }
	);

	$( ".is12" ).hover(
	  function() {
	   $( ".perks-captions" ).removeClass( "cap" );
	   $( ".sc12" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc12" ).fadeOut( 200 );
	    $( ".perks-captions" ).addClass( "cap" );
	  }
	);

	$( ".is13" ).hover(
	  function() {
	   $( ".perks-captions" ).removeClass( "cap" );
	   $( ".sc13" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc13" ).fadeOut( 200 );
	    $( ".perks-captions" ).addClass( "cap" );
	  }
	);

	$( ".is14" ).hover(
	  function() {
	   $( ".perks-captions" ).removeClass( "cap" );
	   $( ".sc14" ).fadeIn( 100 );
	  }, function() {
	    $( ".sc14" ).fadeOut( 200 );
	    $( ".perks-captions" ).addClass( "cap" );
	  }
	);
});



// $(document).ready(function(){
// 	$(".pleasework.a").mouseenter(function(){
// 		$(".housemenu.a").slideDown(500);
// 	});

// 	$(".pleasework.a").mouseout(function(){
// 		$(".housemenu.a").slideUp(400);
// 	});
// });

// $(document).ready(function(){
// 	$(".pleasework.b").mouseenter(function(){
// 		$(".housemenu.b").slideDown(500);
// 	});

// 	$(".pleasework.b").mouseout(function(){
// 		$(".housemenu.b").slideUp(400);
// 	});
// });

// $(document).ready(function(){
// 	$(".pleasework.c").mouseenter(function(){
// 		$(".housemenu.c").slideDown(500);
// 	});

// 	$(".pleasework.c").mouseout(function(){
// 		$(".housemenu.c").slideUp(400);
// 	});
// });

// $(document).ready(function(){
// 	$(".pleasework.d").mouseenter(function(){
// 		$(".housemenu.d").slideDown(500);
// 	});

// 	$(".pleasework.d").mouseout(function(){
// 		$(".housemenu.d").slideUp(400);
// 	});
// });


// end ready

