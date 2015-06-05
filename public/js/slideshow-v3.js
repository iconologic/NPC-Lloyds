$(function () {
	$('#first-slide').click(function(){

		var crsl = $('#myCarousel');

		crsl.carousel({
	    interval: 8000,
	    pause: false,
	    wrap: false
		})

		// Hide First Slide + Show Controls & Slider
		$('#first-slide').hide();
		$('#carouselButtons').slideDown("slow");
		$('.carousel-inner').show();

		// Controls - Previous
		$("#prevBtn").on("click", function(){
		  crsl.carousel('prev');
		});

		// Controls - Pause
		$("#pauseBtn").on("click", function(){
	    crsl.carousel('pause');
	  });

		// Controls - Play
	  $("#playButton").on("click", function(){
	    crsl.carousel('cycle');
	  });

		// Controls - Next
		$("#nextBtn").on("click", function(){
		  crsl.carousel('next');
		});

	});
});