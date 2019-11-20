$(document).ready(function (){

	var navContent = $('#main-menu').html();
	var menuCache;
	$('#nav > .container').append('<div id="mobile-menu-wrapper"><ul id="mobile-menu"></ul></div>');
	$('#nav #mobile-menu').append(navContent);


	$('#nav-toggle').on('click', function() {
		$('#mobile-menu').slideToggle(500,"easeOutCubic");
		$('#navigation').toggleClass('active');
		return false;
	});

});