$(function () {

  /* activate sidebar */
  $('#sidebar').affix({
    offset: {
      top: 235
    }
  });


  // Footer Navigation 
  // bind change event to select
  $('#footer-nav').on('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
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


  /* Display warning message for waive coverage button on coverage options */
  $('#waive').hover(function(){
    $('#waiveCoverage').toggle();
  });

  var age;

  $('#enroll').click(function(evt){
    evt.preventDefault();
    age = $('#enrollAge').val();
    // console.log(age);

    $('#step1').hide();
    $('#step2').show();
    $('#coverageAge').html(age);
  });

  // This is for the input box, currently using dropdown code
  // age < 30 show table 1
  $("input:radio[name=30]").click(function() {

      $('#coverageInstruction').hide();
      $('#coveragePrice').show();

      var value = $(this).val();

      $('#coverageTotalPrice').html(value);
      
      // console.log(value);
  });
  // age 30+ tbl2
  // age 40+ tbl3
  // age 50+ tbl4
  // age 60+ tbl5

  // DROPDOWN CODE
  // This will determine age range
  $("#coverageAgeRangeDropdown").change(function() {

      // Find age range value
      var value = $(this).val();
      // console.log(value);

      // Show/Hide Tables based on selected range
      if($('#coverageAgeRangeDropdown').val() == '30') {
        // $('#step1').hide();
        $('#result').show();
        $('.incomeOne').show();
        $('.incomeTwo').hide();
        $('.incomeThree').hide();
        $('.incomeFour').hide(); 
        $('.incomeFive').hide();
        $('.incomeSix').hide();
        $('#enroll, #waive').show();
      }

      if($('#coverageAgeRangeDropdown').val() == '40') {
        // $('#step1').hide();
        $('#result').show();
        $('.incomeOne').hide();
        $('.incomeTwo').show();
        $('.incomeThree').hide();
        $('.incomeFour').hide(); 
        $('.incomeFive').hide();
        $('.incomeSix').hide();
        $('#enroll, #waive').show();
      }

      if($('#coverageAgeRangeDropdown').val() == '45') {
        // $('#step1').hide();
        $('#result').show();
        $('.incomeOne').hide();
        $('.incomeTwo').hide();
        $('.incomeThree').show();
        $('.incomeFour').hide();
        $('.incomeFive').hide();
        $('.incomeSix').hide(); 
        $('#enroll, #waive').show();
      }

      if($('#coverageAgeRangeDropdown').val() == '50') {
        // $('#step1').hide();
        $('#result').show();
        $('.incomeOne').hide();
        $('.incomeTwo').hide();
        $('.incomeThree').hide();
        $('.incomeFour').show(); 
        $('.incomeFive').hide();
        $('.incomeSix').hide();
        $('#enroll, #waive').show();
      }

      if($('#coverageAgeRangeDropdown').val() == '55') {
        // $('#step1').hide();
        $('#result').show();
        $('.incomeOne').hide();
        $('.incomeTwo').hide();
        $('.incomeThree').hide();
        $('.incomeFour').hide(); 
        $('.incomeFive').show();
        $('.incomeSix').hide();
        $('#enroll, #waive').show();
      }

      if($('#coverageAgeRangeDropdown').val() == '60') {
        // $('#step1').hide();
        $('#result').show();
        $('.incomeOne').hide();
        $('.incomeTwo').hide();
        $('.incomeThree').hide();
        $('.incomeFour').hide(); 
        $('.incomeFive').hide();
        $('.incomeSix').show();
        $('#enroll, #waive').show();
      }
  });
  
  

  // ============================
  // CALCULATOR SCRIPTS
  // ============================

  var retirementAge = 67;
  var age = 0;
  var additionalPlans = 0;
  var lumpSumTotal = 0;
  var annualIncomeTotal = 0;
  var monthlyIncomeTotal = 0;
  var optionalIncomeTotal = 0;

  // Show SIP if YES is checked on calculator
  $('#checkboxes-0').change(function() {
    $('#optionalCoverage').show();
    $("#checkboxes-1").prop("checked", false);
    $('#phraseThree').show();
    $('#phraseFour').hide();
  });

  $('#checkboxes-1').change(function() {
    var value = 0
    $('#calcPlans').val(value);
    $('#optionalCoverage').hide();
    $("#checkboxes-0").prop("checked", false);
    $('#phraseThree').hide();
    $('#phraseFour').show();

    annualIncomeTotal = $('#calcIncome').val();
    annualIncomeTotalInteger = parseInt(annualIncomeTotal);
    monthlyIncomeTotal = annualIncomeTotal / 12;

    $('.varSeven').html('$' + monthlyIncomeTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));

  });

  $("#checkboxes-1").prop("checked", true);

  // Find Retirement Age
  // ============================
  $('.varOne').html(retirementAge);
  
  // Get Age
  // ============================
  $('#calcAge').keyup(function(){
    age = yearsCovered(getAge);
  });

  function getAge(){
    return $('#calcAge').val();
  };

  function yearsCovered(age){
    return retirementAge - age();
  };

  // Find Age + Years Covered
  // ============================
  $('#calcAge').keyup(function(){
    $('.varTwo').html($(this).val());
    $('.varThree').html(age);
    $('#phraseOne').show();
  });

  // Find Income
  // ============================
  // $('#calcIncome').keyup(function(){
    
  // });

  // yearsCovered * annualIncome = lumpSumTotal
  // ============================
  $('#calcIncome').keyup(function(){
    age = yearsCovered(getAge);
    annualIncomeTotal = $('#calcIncome').val();

    annualIncomeTotalInteger = parseInt(annualIncomeTotal);

    $('.varFour').html('$' + annualIncomeTotalInteger.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
    monthlyIncomeTotal = annualIncomeTotal / 12;
        
    lumpSumTotal = lumpSum(age, annualIncomeTotal);

    $('.varSix').html('$' + lumpSumTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
    $('.varSeven').html('$' + monthlyIncomeTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));
    $('#phraseTwo').show();
    $('#phraseFour').show();
  });

  function annualIncome(){
    return $('#calcIncome').val();
  };

  function lumpSum(age, income){
    // console.log("age: " + age);
    // console.log(income);
    return age * income;
  };

  // Find Additional Coverage Option Amount
  // ============================
  $('#calcPlans').keyup(function(){

    additionalPlans = $('#calcPlans').val();
    additionalPlansText = parseInt(additionalPlans);
    $('.varFive').html('$' + additionalPlansText.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));

    lumpSumTotal = lumpSum(age, annualIncomeTotal);

    optionalIncomeTotal = annualIncomeTotal - additionalPlans;

    totalDefecit1 = annualIncomeTotalInteger * age;
    totalDefecit2 = optionalIncomeTotal * age;
    totalDefecit3 = totalDefecit1 - totalDefecit2;

    a = annualIncomeTotalInteger / 12;
    // console.log('a= ' + a);
    b = additionalPlans / 12;
    // console.log('b= ' + b);
    c = a - b;
    // console.log('c= ' + c);
    d = c * 12;
    // console.log('d= ' + d);
    e = age;
    // console.log('e= ' + e);
    f = d * e;
    // console.log('f= ' + f);



    monthlyIncomeTotal = annualIncomeTotal / 12;

    monthlyIncomeTotal = optionalIncomeTotal / 12; 

    $('.varSeven').html('$' + monthlyIncomeTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));

    $('.varSix').html('$' + lumpSumTotal.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));

    $('.varEight').html('$' + f.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"));

    $('#phraseFour').hide();
    $('#phraseThree').show();
  });


  $('calcAge')
  
 
});