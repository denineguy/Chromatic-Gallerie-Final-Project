initNavShopDropdown();

initHomepageSlider();

initDetailDropdown();

initImageShow();

initNavTopDropdown();

initPopUp();

initSwapColumns();

initSwitchImage();

initNavScrollFix();



// This will change the view from 3 shoes per row to 6 shoes per row
function initSwapColumns() {
	
	var imageView = $('.image-view');

	if ( imageView.length == 0 ) return;

	imageView.click( function() {
		var shoeContainer = $( '#shoe-container' );

		shoeContainer.removeClass('three-col six-col' );
		if( $( this ).hasClass( 'three' ) ) {
			shoeContainer.addClass( 'three-col' );
		} else {
			shoeContainer.addClass( 'six-col')
		}

		return false;

	});
}

//This operation the image slider on the home page. Will slide between 4 images
function initHomepageSlider() {

	var home = $('.home');

	if ( home.length == 0 ) return;


	var slider = $('.bxslider').bxSlider({
		auto: true,
	});

	$('.right-arrow').click( function() {
		slider.goToNextSlide();
	});

	$('.left-arrow').click( function() {
		slider.goToPrevSlide();
	});
}

// This operates with filter dropdown when someone hovers over the menu option
function initNavShopDropdown() {
	var shop = $('.shop');

	if ( shop.length == 0 ) return;

	var lis = $( '.navigation-bottom-shop li');

	lis.hover(
		function() {
			var nav = $( this ).find('.navigation-inner-dropdown');
			nav.stop().slideDown();
		},
		function() {
			var nav = $( this ).find('.navigation-inner-dropdown');
			nav.stop().slideUp();
		}
	);
}


// This operates the filter dropdown for the top navigation bar when someone hovers over the menu options
function initNavTopDropdown() {
	var filter = $( '.navigation-top .sign-in');

	filter.hover(
		function() {
			var nav = $( this ).find('.navigation-top-dropdown');
			nav.stop().slideDown();
		},
		function() {
			var nav = $( this ).find('.navigation-top-dropdown');
			nav.stop().slideUp();
		}
	);
}


//This control the extra detal on the product detail page.  Click the plus sign to shom more info.  Click the minus sign to hide the info
function initDetailDropdown() {
	var detail = $('.detail');

	if ( detail.length == 0 ) return;

	var sign = $( '.plus');
	$(sign).click(function(){ 
		var slider = $( this ).next();  
	    slider.stop().slideToggle();
	    var image = $( this ).find('img');
	    if(image.attr('src')=='images/plus-24.png'){
	    	image.attr('src','images/minus-24.png');
	    }
	    else{
	    	image.attr('src','images/plus-24.png');
	    }
	    
	});

}

// This will show the different image view of the show, once hovered over.
function initImageShow() {
	var detail =$('.detail');

	if (detail.length == 0 ) return;

	var smallImage = $('.small-image');

	$(smallImage).hover(function(){ 
		var productImage = $('.reel');
		var theurl = $(this).attr('src');
		productImage.attr('src',theurl);
	})
};	

// This allows user to quickly scroll to select information if menu option is clicked
$("#how-works").click(function() {
	$('html, body').animate({  
	    scrollTop: $(".product-wrapper").offset().top
	}, 1000);
	return false;
});


$("#story").click(function() {
    $('html, body').animate({
        scrollTop: $("#video-container").offset().top
    }, 1000);
    return false;
});

$("#new-product").click(function() {
    $('html, body').animate({
        scrollTop: $("#new-release-container").offset().top
    }, 1000);
    return false;
});

	
// This will open a hidden division to display and play the video	
function initSwitchImage(){	

	var imageBox = $(".image-box")

	$(".image-box").click(function(){

		var url = $(this).attr("data-video-url");
			$(".video-box").slideDown();
			console.log(url);
			$(".video-box iframe").attr("src",url+ "&autoplay=1");
	
	});

}

//This operate the sign-in pop-up
function initPopUp() {

	var signPopUp = $(".sign-pop-up")

	signPopUp.click(function() {
		$(".pop-up-show").fadeIn("pop-up") 
	});

	var xMark = $(".x-mark")

	xMark.click(function(){
		$(".pop-up-show").fadeOut("pop-up")

	});

}


//This will operate the scrolling-fixed navigation bar
function initNavScrollFix(){

	$( document).scroll( function() {
	       var scrollTop = $( document ).scrollTop();
	    $( '.scroll' ).text( 'current scrolltop position: ' + scrollTop );
	});

	 $(document).ready(function() {
	  
	  $(window).scroll(function () { 

	    console.log($(window).scrollTop());

	    if ($(window).scrollTop() > 436) {
	      $('.navigation-wrapper2').addClass('navigation-wrapper2-fixed');
	    }

	    if ($(window).scrollTop() < 437) {
	      $('.navigation-wrapper2').removeClass('navigation-wrapper2-fixed');
	    }

	  });

	});
}

// This performs form validation when the submit button is clicked
$(document).ready(function(){
	$('.error').hide();

	$('input[type="submit"]').click(function(event){
		event.preventDefault();		
		validateForm();
	});	
});

function validateForm() {
	console.log("Validating form...");
	$('.error').hide();

	var fname = $('#first_name').val();
	var lname = $('#last_name').val();
	var phone = $('#user_ph').val();
	var email = $('#user_email').val();

	var phone_regex = /^\d{3}-?\d{3}-?\d{4}$/g;
	var email_regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

	var haserrors = false;
	if(fname.length<1) {
		$('#first_name_error').show();
		haserrors = true;
		console.log('bad fname');
	}

	if(lname.length<1) {
		$('#last_name_error').show();
		haserrors = true;
		console.log('bad lname');
	}

	if(!phone_regex.test(phone)){
		$('#user_ph_error').show();
		haserrors = true;
		console.log('bad phone');
	}
	if(!email_regex.test(email)){
		$('#user_email_error').show();
		haserrors = true;
		console.log('bad email');
	}

	if (!haserrors) {
		submit_form(fname, lname, phone, email);
	}
}

function submit_form(fname, lname, phone, email) {
	console.log('Form submitted successfully.');
	$('#display_data').append(
		'<li>'+fname+'</li>'
		+'<li>'+lname+'</li>'
		+'<li>'+phone+'</li>'
		+'<li>'+email+'</li>');
}


