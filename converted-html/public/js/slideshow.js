$(function () {

//Global variables
    $globalVars = {
        nextIndex:0,
        currentPercent:11.11
    }

    //Initialize progress bar since we start on the first step
    $('.my-progress-bar').css({
        width: '11.11%'
    });

    var start = {
      // interval: 0,
      // wrap: "false"

      interval: 2500,
      pause: "false"
    };

    $('#myCarousel').carousel(start);

    var cnt = $('#myCarousel .item').length;

    $('#myCarousel').on('slid.bs.carousel', '', function() {
        console.log(cnt);
        cnt--;
        if (cnt == 1) {
          console.log(cnt);
          $('#myCarousel').carousel('pause');
        }
    });

    $('#playButton').click(function () {
        $('#myCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#myCarousel').carousel('pause');
    });
    
    var clickEvent = false;
    $('#myCarousel').on('click', '.nav a', function() {
      clickEvent = true;
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');
      var current = $('.nav li.active');
      var id = parseInt(current.data('slide-to'));
      //Call progress bar update function
      updateProgress(id);

    }).on('slid.bs.carousel', function(e) {
      if(!clickEvent) {
        var count = $('.nav').children().length -1;
        var current = $('.nav li.active');
        current.removeClass('active').next().addClass('active');
        var id = parseInt(current.data('slide-to'));
        //Set the next slide index
        $globalVars.nextIndex = id + 1;

        //If the next index goes out of bound, reset to 0
        if($globalVars.nextIndex == 6){
            $globalVars.nextIndex = 0;
        }

        //Call progress bar update function
        updateProgress($globalVars.nextIndex);

        if(count == id) {
          $('.nav li').first().addClass('active');    
        }
      }
      clickEvent = false;
    });
});

function updateProgress(nextIndex){
  //Check to see if we came back to the first step
  if(nextIndex == 0){
    //If true, we set our progress to 25%
    $globalVars.currentPercent = 11.11;
  }
  else{
    //Else we update the progress bar
    $globalVars.currentPercent = 11.11 * (nextIndex + 1);
  }
  
  //Update progress bar width property
  $('.my-progress-bar').css({
    width: $globalVars.currentPercent + '%'
  });
}


// PIE
  
