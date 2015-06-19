$(function () {

	// Progress Bar
	  var percent = 0, 
	  		bar = $('.transition-timer-carousel-progress-bar'), 
	  		crsl = $('#myCarousel');

	$('#first-slide').click(function(){

		// Hide/Show elements after clicking first slide
		$('#first-slide').hide();
		$('#carouselButtons').slideDown("slow");
		$('.carousel-inner').show();
		// $('.transition-timer-carousel-progress-bar').show();
	
	  // crsl.carousel({ 
		 //  interval: false,
	  // });

	  // $('#myCarousel').on('click', 'a', function() {
	  //  	crsl.data('bs.carousel').options.interval=false;
	  //  	crsl.carousel('cycle');
	  // });

	  $("#playButton").on("click", function(){
	  	crsl.data('bs.carousel').options.interval=false;
	    crsl.carousel('cycle');
	  });

	  // $("#pauseButton").on("click", function(){
	  //   crsl.carousel('pause');
	  // });

	  $("#prevButton").on("click", function(){
	    crsl.carousel('prev');
	  });

	  $("#nextButton").on("click", function(){
	    crsl.carousel('next');
	  });

	  
		
		// function progressBarCarousel() {
		//   bar.css({width:percent+'%'});
		//  	percent = percent +0.5;

		//   if (percent>100) {
	 //      percent=0;
	 //      crsl.carousel('next');
		//   }      
		// }

		crsl.carousel({
	    interval: 500,
	    pause: "false",
	    wrap: "false"
		}).on('slid.bs.carousel', function () {percent=0;});

		var barInterval = setInterval(progressBarCarousel, 30);

		crsl.hover(
	    function(){
	      clearInterval(barInterval);
	    },
	    function(){
	      barInterval = setInterval(progressBarCarousel, 30);
	    })

		$('#myCarousel').on('slide.bs.carousel', function () {
		  if ($("#last-slide").hasClass("active")) {
		    console.log("finish");
		    $('.transition-timer-carousel-progress-bar').hide();
		    $('#carouselButtons').hide();
		    progressBarCarousel().stop();
		  }
		})
	});

});