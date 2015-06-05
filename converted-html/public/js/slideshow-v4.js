$(function () {
	jQuery("#layerslider").layerSlider({
	  pauseOnHover: false,
	  autoPlayVideos: false,
	  skinsPath: '../public/css/',
	  loops: 1
	});

	// BACK
	$('button#prev').click(function(){
	  $('#layerslider').layerSlider('prev');
	});

	// PAUSE
	$('button#pause').click(function(){
	  $('#layerslider').layerSlider('stop');
	  $(this).hide();
	  $('button#play').show();
	});

	// PLAY
	$('button#play').click(function(){
	  $('#layerslider').layerSlider('start');
	  $(this).hide();
	  $('button#pause').show();
	});

	// NEXT
	$('button#next').click(function(){
	  $('#layerslider').layerSlider('next');
	});
});