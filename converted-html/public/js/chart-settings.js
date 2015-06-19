$(function () {
  Chart.defaults.global.customTooltips = function(tooltip) {

    // Tooltip Element
      var tooltipEl = $('#chartjs-tooltip');

      // Hide if no tooltip
      if (!tooltip) {
          tooltipEl.css({
              opacity: 0
          });
          return;
      }

      // Set caret Position
      tooltipEl.removeClass('above below');
      tooltipEl.addClass(tooltip.yAlign);

      // Set Text
      tooltipEl.html(tooltip.text);

      // Find Y Location on page
      var top;
      if (tooltip.yAlign == 'above') {
          top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
      } else {
          top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
      }

      // Display, position, and set styles for font
      tooltipEl.css({
          opacity: 1,
          left: tooltip.chart.canvas.offsetLeft + tooltip.x + 'px',
          top: tooltip.chart.canvas.offsetTop + top + 'px',
          fontFamily: tooltip.fontFamily,
          fontSize: tooltip.fontSize,
          fontStyle: tooltip.fontStyle,
      });
  };

  var pieData = [{
      value: 100,
      color: "#6699cc",
      highlight: "#6699cc",
      label: "Your compensation while employed"
  }, {
      value: 0,
      color: "#6699cc",
      highlight: "#6699cc",
      label: "Your current long term disability coverage"
  }, {
      value: 0,
      color: "#b4b4b4",
      highlight: "#b4b4b4",
      label: "Potential loss of income in event of a disability"
  }, {
      value: 0,
      color: "#6699cc",
      highlight: "#6699cc",
      label: "Lloyd's of London coverage in the event of a disability"
  }];

  window.onload = function() {      

      var c = document.getElementById("chart-area");
      var ctx = c.getContext("2d");
      window.myPie = new Chart(ctx).Pie(pieData);
      document.getElementById('pieLegend').innerHTML = myPie.generateLegend();

  };

  //Update Value
  $('#update-0').click(function(){
      console.log('click');
      myPie.segments[0].value = 100;
      myPie.segments[1].value = 0;
      myPie.segments[2].value = 0;
      myPie.segments[3].value = 0;
      myPie.update();
      $('#pieTextOne').slideDown("fast");
      $('#pieTextTwo').slideUp("fast");
      $('#pieTextThree').slideUp("fast");
      $('ul.pie-legend>li:nth-child(1)').css('display', 'block');
      $('ul.pie-legend>li:nth-child(2)').css('display', 'none');
      $('ul.pie-legend>li:nth-child(3)').css('display', 'none');
      $('ul.pie-legend>li:nth-child(4)').css('display', 'none');
      $('#update-0').addClass('active');
      $('#update-1').removeClass('active');
      $('#update-2').removeClass('active');
  });
  $('#update-1').click(function(){
      console.log('click');
      myPie.segments[0].value = 0;
      myPie.segments[1].value = 40;
      myPie.segments[2].value = 60;
      myPie.segments[3].value = 0;
      myPie.update();
      $('#pieTextOne').slideUp("fast");
      $('#pieTextTwo').slideDown("fast");
      $('#pieTextThree').slideUp("fast");
      $('ul.pie-legend>li:nth-child(1)').css('display', 'none');
      $('ul.pie-legend>li:nth-child(2)').css('display', 'block');
      $('ul.pie-legend>li:nth-child(3)').css('display', 'block');
      $('ul.pie-legend>li:nth-child(4)').css('display', 'none');
      $('#update-0').removeClass('active');
      $('#update-1').addClass('active');
      $('#update-2').removeClass('active');
  });
  $('#update-2').click(function(){
      console.log('click');
      myPie.segments[0].value = 0;
      myPie.segments[1].value = 40;
      myPie.segments[2].value = 0;
      myPie.segments[3].value = 60;
      myPie.update();
      $('#pieTextOne').slideUp("fast");
      $('#pieTextTwo').slideUp("fast");
      $('#pieTextThree').slideDown("fast");
      $('ul.pie-legend>li:nth-child(1)').css('display', 'none');
      $('ul.pie-legend>li:nth-child(2)').css('display', 'block');
      $('ul.pie-legend>li:nth-child(3)').css('display', 'none');
      $('ul.pie-legend>li:nth-child(4)').css('display', 'block');
      $('#update-0').removeClass('active');
      $('#update-1').removeClass('active');
      $('#update-2').addClass('active');
  });



});