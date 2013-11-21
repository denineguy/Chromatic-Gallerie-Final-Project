initNavShopDropdown();

initHomepageSlider();

initDetailDropdown();

initImageShow();

// initVideoDropdown();

initNavTopDropdown();

initPopUp();

initSwapColumns();

initSwitchImage();

initNavScrollFix();



function initSwapColumns() {
	// swap the class for #show-container 
	// with three-col or six-col

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


function initHomepageSlider() {
	// only for homepage slider!!

	var home = $('.home');

	if ( home.length == 0 ) return;

	// if we are here, then we are on the home page

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

function initNavTopDropdown() {
	var filter = $( '.navigation-top li');

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


function initDetailDropdown() {
	var detail = $('.detail');

	if ( detail.length == 0 ) return;

	var sign = $( '.plus');
	$(sign).click(function(){ //sign could have been '.plus'
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

function initImageShow() {
	var detail =$('.detail');

	if (detail.length == 0 ) return;

	var smallImage = $('.small-image');

	$(smallImage).hover(function(){ //image could have been('.small-image')
		var productImage = $('.reel');
		var theurl = $(this).attr('src');
		productImage.attr('src',theurl);
	})
};	

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

	
function initSwitchImage(){	

	var imageBox = $(".image-box")

	$(".image-box").click(function(){

		var url = $(this).attr("data-video-url");
			$(".video-box").slideDown();
			console.log(url);
			$(".video-box iframe").attr("src",url+ "&autoplay=1");
	
	});

}


function initPopUp() {

	var signPopUp = $(".sign-pop-up")

	signPopUp.click(function() {
		$(".pop-up-show").fadeIn() //don't have to put a dot because it is a class
	});

	var xMark = $(".x-mark")

	xMark.click(function(){
		$(".pop-up-show").fadeOut();

	});

}


function initNavScrollFix(){

	$( document).scroll( function() {
	       var scrollTop = $( document ).scrollTop();
	    $( '.scroll' ).text( 'current scrolltop position: ' + scrollTop );
	});

	 $(document).ready(function() {
	  //change the integers below to match the height of your upper dive, which I called
	  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
	  //to figure out what the scroll position is when exactly you want to fix the nav
	  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
	  //you know the position.
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


