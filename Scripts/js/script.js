var j$ = jQuery.noConflict();
var ww=0;

j$(document).ready(function() {
	ww = document.body.clientWidth;
	j$(".nav li a").each(function() {
		if (j$(this).next().length > 0) {
			j$(this).addClass("parent");
		};
	})
	
	j$(".toggleMenu").click(function(e) {
		e.preventDefault();
		j$(this).toggleClass("active");
		j$(".nav").toggle();
	});
	adjustMenu();
})

j$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 1000) {
		j$(".toggleMenu").css("display", "inline-block");
		if (!j$(".toggleMenu").hasClass("active")) {
			j$(".nav").hide();
		} else {
			j$(".nav").show();
		}
		j$(".nav li").unbind('mouseenter mouseleave');
		j$(".nav li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			j$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 1001) {
		j$(".toggleMenu").css("display", "none");
		j$(".nav").show();
		j$(".nav li").removeClass("hover");
		j$(".nav li a").unbind('click');
		j$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	j$(this).toggleClass('hover');
		});
	}
}

