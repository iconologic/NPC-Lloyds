$(function () {

  /* activate sidebar */
  $('#sidebar').affix({
    offset: {
      top: 235
    }
  });

  /* activate scrollspy menu */
  var $body   = $(document.body);
  var navHeight = $('.navbar').outerHeight(true) + 10;

  $body.scrollspy({
    target: '#leftCol',
    offset: navHeight
  });

  /* FAQ Accordion */
  $('.collapse').collapse()

  var active = true;
  $('#accordion').on('show.bs.collapse', function () {
    if (active) $('#accordion .in').collapse('hide');
  });

  // $('.panel-heading').hover(function(){
  //   $(this).toggleClass("active");
  // });
  
  
      // if($('.panel-heading').is(':hover') {
      //     $(this).css({'background':'blue'});
      // }
      // else {
      //     $('.panel-heading').css({'background':'red'});
      // }
  
    // var $heading = $('.panel-heading');

    // if($heading.is(":hover")) {
    //   console.log("heading hover");
    //    $heading.css("background", "yellow");
    // }
    // else {
    //    $heading.css("background", "");
    // }

  $(function() {
    $('#accordion')
    .on('show.bs.collapse', function(e) {
      $(e.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(e) {
      $(e.target).prev('.panel-heading').removeClass('active');
    });          
  });

 
});