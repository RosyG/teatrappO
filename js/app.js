$(document).ready(function(){
	$('.carousel').carousel({
		dist:0,
		shift:0,
		padding:20,

	});

	/* Función Splash */

	 setTimeout(function() {
    $('#splash').fadeOut(500);
    $('#mainview').show();
    }, 1000);

	$('.slider').slider();
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$('.modal').modal();
});
