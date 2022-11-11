$(document).ready(function () {
	$(document).on("scroll", onScroll);

	$(".scrollto").click(function(event) {
		event.preventDefault(); 
		$(document).off("scroll");
        
		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var anchor = $(this).attr('data-attr-scroll');
                
		$('html,body').stop().animate({ 
			scrollTop: $('#'+anchor).offset().top + 1
		}, 1250, function () {
			$(document).on("scroll", onScroll);
		});   
		return false;
	});
});

window.onscroll = function() {
	onScroll();
};

function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	$('#menu-center a').each(function () {
		var anchor = $(this).attr('data-attr-scroll');
		var refElement = $('#'+anchor);

		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('#menu-center a').removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

function topFunction() {
	$('html, body').animate({scrollTop:0}, 'slow');
}

$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 0)
			$(".topMenu").addClass('menuScrolling');
		else
			$(".topMenu").removeClass("menuScrolling");
	});
});