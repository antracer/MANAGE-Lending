$(window).on('load', function() {
	let i = 1;

	$('.navbar-toggler-icon').on('click', function(){
		$('.last-nav-link').hide();
		if (i == 1) {
			this.style.backgroundImage = 'url(images/icon-close.svg)';
			$('.navbar-collapse').css('background-color', '#f2f3f4');
			i = 2;
		} else {
			this.style.backgroundImage = 'url(images/icon-hamburger.svg)';
			i = 1;
		}
	});
});

