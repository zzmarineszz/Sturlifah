//Parallax effect
$(document).scroll(function() {
	var $depth, $layers, $movement, $topDistance;
	$topDistance = $(this).scrollTop();
	$layers = $(".layer");
	$($layers).each(function() {
		$depth = $(this).data("depth");
		$movement = -($topDistance * $depth);
		$(this).stop().css({transform: "translate3d(0, " + $movement + "px, 0)"});
	});
});

//Hide and show menu and hamburger menu position change
const $hamburgerIcon = $("#hamburger-icon");
const $hamburgerMenuContainer = $("#hamburger-menu-container");

$(window).ready(function() {
	$hamburgerMenuContainer.hide();
	$(".hamburger-menu").css("display", "block");
	$hamburgerIcon.click(function() {
		$hamburgerIcon.children().toggleClass("change");
		$hamburgerMenuContainer.stop().slideToggle(300);
	});
});

//Mobile and tablet menu list destination and hide menu
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
	if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "")
		&& location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length && $(".hamburger-menu").css("display") === "block") {
				var $htmlAndBody = $('html, body');
				event.preventDefault();
				$htmlAndBody.stop().animate(
				{scrollTop: target.offset().top -58},
				1000, function() {
					var $target = $(target);
					$target.focus();
					if($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
	}
	if ($("#hamburger-icon-container").css("display") !== "none") {
		$hamburgerIcon.children().toggleClass("change");
		$hamburgerMenuContainer.stop().slideToggle("fast");
	}
});

$(window).resize(function() {
	if($("#hamburger-icon-container").css("display") === "none")
		$hamburgerMenuContainer.css("display", "none");
		$hamburgerIcon.children().removeClass("change");
});

//Hamburger style change
$('#hamburger--icon').hover(function() {
	$('#hamburger-icon div').css('background-color', 'grey');
},function() {
// on mouseout, reset the background colour
	$('#hamburger-icon div').css('background-color', '');
});

$("#hamburger-icon").mousedown(function() {
	$("#hamburger-icon div").css("background-color", "white");
});

$("#hamburger-icon").mouseup(function() {
	$("#hamburger-icon div").css("background-color", "");
});


// Check the initial Poistion of the Sticky Header
var stickyHeaderTop = $('#menu-bar-container').offset().top;
$(document).scroll(function(){
		if( $(this).scrollTop() >= stickyHeaderTop ) {
				$('#menu-bar-container').css({position: 'fixed', top: '0px'});
				$("#menu-bar-container").css("background-color", "rgba(1, 1, 1, 0.8)");
		} else {
				$('#menu-bar-container').css({position: 'absolute', top: '0px'});
				$("#menu-bar-container").css("background-color", "#111");
		}
});