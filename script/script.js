// Global Variables

var payRate = 23
var hoursPerWeek 
var daysPerWeek = 3
var hoursPerDay = 7.5
var weeklySuper
var internBillRate = 90;
var weeklyWages
var internBillableHoursPerWeek
var internBillingsPerWeek
var internLength 
var mentorHoursPerWeek
var mentorCostPerWeek
var mentorBillRate = 100;


// fullPage.js

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

$('.btnNext').on('click',function() {
  $("#fullpage").fullpage.moveSectionDown();
});

$('.btnBack').on('click',function() {
  $("#fullpage").fullpage.moveSectionUp();
});

$('.btnStartOver').on('click',function() {
  $("#fullpage").fullpage.moveTo(1);
});


// Basics Page

// Pay Rate

$("#payRate").bind("change", function(){
	var sliderval = $(this).val();
	payRate = sliderval;
	checkPayRate();
	console.log("Intern Pay rate = " + payRate)
	$("#txtPayRate").find("input").val(sliderval);
});

$("#txtPayRate").bind("change", function(){
	var textval = $(this).val();
	payRate = textval;
	checkPayRate();
	$("#payRate").attr("value", textval)
})


function checkPayRate(){
  if (payRate >=23 && payRate <= 29.99) {
    $("#feedbackHourlyRate").html("<p>Awesome, That's in our recommended range</p>");
  } 
  else if (payRate >=19.5 && payRate <= 22.99) {
    $("#feedbackHourlyRate").html("<p>While that ammount is above award wage, It is a little low.</p>");
  } 
  else if (payRate > 30) {
    $("#feedbackHourlyRate").html("<p>That's a little high, is this really an internship?</p>");
  } 
  else if (payRate < 19.49) {
    $("#feedbackHourlyRate").html("<p>That ammount is below award wage</p>");
  } 
}

// Days Per Week

$("#daysPerWeek").bind("change", function(){
	var sliderval = $(this).val();
	daysPerWeek = sliderval;
  $("#txtDaysPerWeek").val(sliderval);
  checkDays();
});

$("#txtDaysPerWeek").bind("change", function(){
	var textval = $(this).val();
	daysPerWeek = textval;
	checkDays();
	$("#daysPerWeek").attr("value", textval)
});

function checkDays(){

  if (daysPerWeek > 3) {
    $("#feedbackDaysPerWeek").html("<p>Whoa!! This is starting to look like a full time role. We recommend 2 to 3 days</p>");
  } 
  else if (daysPerWeek < 2) {
    $("#feedbackDaysPerWeek").html("<p>Will they be able to acheive enough on one day?</p>");
  } 
  else  {
    $("#feedbackDaysPerWeek").html("<p>Awesome, That's in our recommended range</p>");
  } 
}

// Hours Per Day

$("#hoursPerDay").bind("change", function(){
	var sliderval = $(this).val();
	hoursPerDay = sliderval;
  $("#txthoursPerDay").val(sliderval);
  checkHours();
});

$("#txthoursPerDay").bind("change", function(){
	var textval = $(this).val();
	hoursPerDay = textval;
	checkHours();
	$("#hoursPerDay").val(textval);
})

function checkHours(){

  if (hoursPerDay> 8) {
    $("#feedbackHoursPerDay").html("<p>That's a very long shift, you may have to pay over time</p>");
  } 
  else if (hoursPerDay < 4) {
    $("#feedbackHoursPerDay").html("<p>They aren’t going to get much done in such a short shift, also you might be breaking labour laws. </p>");
  } 
  else  {
    $("#feedbackHoursPerDay").html("<p>Awesome, That's in our recommended range</p>");
  } 
}

// Internship Length

$("#internWeeks").bind("change", function(){
	var sliderval = $(this).val();
	internLength = sliderval;
  $("#txtInternWeeks").val(sliderval);
  checkLength();
});

$("#txtInternWeeks").bind("change", function(){
	var textval = $(this).val();
	internLength = textval;
	checkLength();
	$("#internWeeks").val(textval);
})

function checkLength(){

  if (internLength> 26) {
    $("#feedbackInternWeeks").html("<p>Thats a long time, are you sure this is an internship? It sounds more like a long term engagement?</p>");
  } 
  else if (internLength < 12) {
    $("#feedbackInternWeeks").html("<p>Internships are not effective in such a short amount of time. </p>");
  } 
  else  {
    $("#feedbackInternWeeks").html("<p>Awesome, That's in our recommended range</p>");
  } 
}

// Billings Page

$("#internBillRate").bind("change", function(){
	var sliderval = $(this).val();
  internBillRate = sliderval;
  $("#txtInternBillRate").val(sliderval);
});

$("#txtInternBillRate").bind("change", function(){
	var textval = $(this).val();
  internBillRate = textval;
  $("#internBillRate").val(textval);
});

// Mentor Page

$("#mentorCost").bind("change", function(){
	var textval = $(this).val();
  mentorBillRate = textval;
});


// Results Page

// Toggle
$("#toggleWeekly").on("click", function(){
	// Visual styling
	$(this).addClass("liambackground");
	$("#toggleMonthly").removeClass("liambackground");

	// Change all variables
	$(".LiamInternPayRate").text(internPayRate * 1);
});

$("#toggleMonthly").on("click", function(){
	// Visual styling
	$(this).addClass("liambackground");
	$("#toggleWeekly").removeClass("liambackground");

	// Change all variables
	$(".LiamInternPayRate").text(internPayRate * 4);
});





// Set Hours Per Week



function getHoursPerWeek() {
  if (daysPerWeek < 2) {
    console.log("days per week is too short")
  } else if (daysPerWeek > 3) {
    console.log("days per week is too long")
  } else {
    console.log("days per week is correct")
  };

  if (hoursPerDay < 4) {
    console.log("Shift is not long enough")
  } else if (hoursPerDay > 8) {
    console.log("shift is too short")
  } else {
    console.log("shift is correct")
  };
  hoursPerWeek = hoursPerDay * daysPerWeek;
}





//Work Out Wages

function getWeeklyWage() {
  var superPerHour = payRate * 0.095;
  weeklySuper = superPerHour * hoursPerWeek;
  weeklyWages = payRate * hoursPerWeek;
}




//Work Out Billings

function getWeeklyBillings() {
  internBillableHoursPerWeek = hoursPerWeek / 2;

  internBillingsPerWeek = internBillRate * 4;
}


// Work Out Mentoring Costs

function getWeeklyMentor() {
  mentorHoursPerWeek = hoursPerWeek * 0.4;
  mentorCostPerWeek = mentorHoursPerWeek * mentorBillRate;
}



//Display

function display() {

  var displaySummary = "weekly";
  getHoursPerWeek()
  getWeeklyWage()
  getWeeklyMentor()
  getWeeklyBillings()
  checkLength()
  var totalInternCostPerWeek
  var totalWeeklyCosts

  function getWeeklyTotals() {
    totalWeeklyCosts = weeklyWages + weeklySuper + mentorCostPerWeek;

    totalInternCostPerWeek = totalWeeklyCosts - internBillingsPerWeek;
  }

  function displayWeekly() {

    getWeeklyTotals()
    console.log("Wages Per Week");
    console.log(weeklyWages);
    console.log("Super");
    console.log(weeklySuper);
    console.log("Mentor Costs");
    console.log(mentorCostPerWeek);
    console.log("Mentor Hours");
    console.log(mentorHoursPerWeek);
    console.log("Total Weekly Costs");
    console.log(totalWeeklyCosts);
    console.log("Billings");
    console.log(internBillingsPerWeek);
    console.log("Billable Hours");
    console.log(internBillingsPerWeek);
    console.log("Total Weekly Cost");
    console.log(totalInternCostPerWeek)
  }

  function displayMonthly() {

    getWeeklyTotals()
    console.log("Wages Per Month");
    console.log(weeklyWages * 4);
    console.log("Super");
    console.log(weeklySuper * 4);
    console.log("Mentor Costs");
    console.log(mentorCostPerWeek * 4);
    console.log("Mentor Hours");
    console.log(mentorHoursPerWeek * 4);
    console.log("Total Monthly Costs");
    console.log(totalWeeklyCosts * 4);
    console.log("Billings");
    console.log(internBillingsPerWeek * 4);
    console.log("Billable Hours");
    console.log(internBillingsPerWeek * 4);
    console.log("Total Monthly Cost");
    console.log(totalInternCostPerWeek * 4);
  }

  function displayTotal() {

    getWeeklyTotals()

    displaySummary = "total"
    console.log("Wages");
    console.log(weeklyWages * internLength);
    console.log("Super");
    console.log(weeklySuper * internLength);
    console.log("Mentor Costs");
    console.log(mentorCostPerWeek * internLength);
    console.log("Mentor Hours");
    console.log(mentorHoursPerWeek * internLength);
    console.log("Total Costs");
    console.log(totalWeeklyCosts * internLength);
    console.log("Billings");
    console.log(internBillingsPerWeek * internLength);
    console.log("Billable Hours");
    console.log(internBillingsPerWeek * internLength);
    console.log("Total Cost");
    console.log(totalInternCostPerWeek * internLength);
  }

  if (displaySummary == "weekly") {
    displayWeekly()
  } else if (displaySummary == "monthly") {
    displayMonthly()
  } else {
    displayTotal
  }

}
display()
