$(document).ready(function() {
	$("[class^=section_title_]").each(function() {
		var scroll_speed = 3;
		var $this = $(this);
		$(window).scroll(function() {
			var bgScroll = -(($(window).scrollTop() - $this.offset().top) / scroll_speed);
			var bgPosition = 'center '+ bgScroll + 'px';
			$this.css({ backgroundPosition: bgPosition });
		});
	});
});