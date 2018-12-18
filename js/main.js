// Button menu
$(document).ready(function(){
	$('.header-nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});


//Mobile menu
$(document).ready(function(){
	var touch = $(".header-nav-icon");
	var menu = $(".header-menu");

	$(touch).on("click", function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 960 && menu.is(":hidden")) {
			menu.removeAttr("style");
		}
	});
});


//Main slider
$('.main-slider').slick({
	dots: true,
	arrows: true
});

//Open popup
$(".enter-popup").click(function() {
	$(".popup").fadeIn();
});


//Close popup on click under window 
$(document).mouseup(function(e) {
	var popup = $(".popup");
	if(e.target!=popup[0]&&popup.has(e.target).length === 0) {
		$(".popup").fadeOut();
	}
}); 


// Calculation statistics
var time = 2; cc = 1;
$(window).scroll(function(){
	$('#counter').each(function(){
		var cPos = $(this).offset().top,
		topWindow = $(window).scrollTop();
		if (cPos < topWindow + 500) {
			if (cc < 2) {
	$(".number").addClass('viz');
	  $('h5').each(function(){
	    var 
	    i = 1,
	    num = $(this).data('num'),
	    step = 1000 * time / num,
	    that = $(this),
	    int = setInterval(function(){
	      if (i <= num) {
	        that.html(i);
	      }
	      else {
	      	cc = cc + 2;cc
	        clearInterval(int);
	      }
	      i++;
	    },step);
	  });
	  }
	 }
	});
});


//Add class active on click button filter
$('.menu-our-project li').click(function() {
	$('.menu-our-project li').removeClass('active');
	$(this).addClass('active');
});


//Filter 
$(document).ready(function(){
	$(".button").click(function() {
		var value = $(this).attr("data-filter");
		if (value == "all") {
			$(".our-project-item").show();
		} else {
			$(".our-project-item").not("."+value).hide();
			$(".our-project-item").filter("."+value).show();
		}
	});
});


// Resent post slider
$('.resent-post-slider').slick({
	arrows: true	
});


// Post image slider 
$('.slider-post-image').slick({
	dots: true,
	arrows: false
});

