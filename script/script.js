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
var internLength = 12
var mentorHoursPerWeek
var mentorCostPerWeek
var mentorBillRate = 100;
var totalInternCostPerWeek
var totalWeeklyCosts
var totalWeeklyWageCost

// Global Functions

// Set Hours Per Week

function getHoursPerWeek() {
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

function getWeeklyTotals() {
  totalWeeklyCosts = weeklyWages + weeklySuper + mentorCostPerWeek;
  totalWeeklyWageCost = weeklyWages + weeklySuper;
  totalInternCostPerWeek = totalWeeklyCosts - internBillingsPerWeek;
}

function displayTotal () {
  var totalWages = weeklyWages * internLength
  var totalSuper = weeklySuper * internLength 
  var totalWageCost = totalWeeklyWageCost * internLength
  var totalMentoringHours = mentorHoursPerWeek * internLength
  var totalMentorCost = mentorCostPerWeek  * internLength
  var totalCosts = totalWeeklyCosts  *  internLength
  var totalBillableHours = internBillableHoursPerWeek  * internLength
  var totalBillings = internBillingsPerWeek  * internLength 
  var totalCost = totalInternCostPerWeek * internLength
  $("#wages").html("<p> $"+ totalWages.toFixed(2) + "</p>")
  $("#super").html("<p> $"+ totalSuper.toFixed(2) + "</p>")
  $("#totalWages").html("<h5>$"+ totalWageCost.toFixed(2) + "</h5>")
  $("#mentoringHours").html("<p>"+ totalMentoringHours.toFixed(2) + "</p>")
  $("#mentoringWages").html("<h5>$"+ totalMentorCost.toFixed(2) + "</h5>")
  $("#costs").html("<h4>$"+ totalCosts.toFixed(2) + "</h4>")
  $("#billableHours").html("<p>"+ totalBillableHours.toFixed(2) + "</p>")
  $("#billings").html("<h5>$"+ totalBillings.toFixed(2) + "</h5>")
  $("#income").html("<h4>$"+ totalBillings.toFixed(2) + "</h4>")
  $("#totalCost").html("<h4>$"+ totalCost.toFixed(2) + "</h4>")
}

function displayWeekly () {
  $("#wages").html("<p> $"+ weeklyWages.toFixed(2) + "</p>")
  $("#super").html("<p> $"+ weeklySuper.toFixed(2) + "</p>")
  $("#totalWages").html("<h5>$"+ totalWeeklyWageCost.toFixed(2) + "</h5>")
  $("#mentoringHours").html("<p>"+ mentorHoursPerWeek.toFixed(2) + "</p>")
  $("#mentoringWages").html("<h5>$"+ mentorCostPerWeek.toFixed(2) + "</h5>")
  $("#costs").html("<h4>$"+ totalWeeklyCosts.toFixed(2) + "</h4>")
  $("#billableHours").html("<p>"+ internBillableHoursPerWeek.toFixed(2) + "</p>")
  $("#billings").html("<h5>$"+ internBillingsPerWeek.toFixed(2) + "</h5>")
  $("#income").html("<h4>$"+ internBillingsPerWeek.toFixed(2) +"</h4>")
  $("#totalCost").html("<h4>$"+ totalInternCostPerWeek.toFixed(2) +"</h4>")
}

function displayMonthly () {
  var monthlyWages = weeklyWages * 4
  var monthlySuper = weeklySuper * 4 
  var monthlyWageCost = totalWeeklyWageCost * 4
  var monthlyMentoringHours = mentorHoursPerWeek * 4
  var monthlyMentorCost = mentorCostPerWeek  * 4
  var monthlyCosts = totalWeeklyCosts  *  4
  var monthlyBillableHours = internBillableHoursPerWeek  * 4
  var monthlyBillings = internBillingsPerWeek  * 4
  var monthlyCost = totalInternCostPerWeek * 4
  $("#wages").html("<p> $"+ monthlyWages.toFixed(2) + "</p>")
  $("#super").html("<p> $"+ monthlySuper.toFixed(2) + "</p>")
  $("#totalWages").html("<h5>$"+ monthlyWageCost.toFixed(2) + "</h5>")
  $("#mentoringHours").html("<p>"+ monthlyMentoringHours.toFixed(2) + "</p>")
  $("#mentoringWages").html("<h5>$"+ monthlyMentorCost.toFixed(2) + "</h5>")
  $("#costs").html("<h4>$"+ monthlyCosts.toFixed(2) + "</h4>")
  $("#billableHours").html("<p>"+ monthlyBillableHours.toFixed(2) + "</p>")
  $("#billings").html("<h5>$"+ monthlyBillings.toFixed(2) + "</h5>")
  $("#income").html("<h4>$"+ monthlyBillings.toFixed(2) + "</h4>")
  $("#totalCost").html("<h4>$"+ monthlyCost.toFixed(2) + "</h4>")
}

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

// Calculate

function calculate(){
  getHoursPerWeek()
  getWeeklyWage()
  getWeeklyMentor()
  getWeeklyBillings()
  getWeeklyTotals()
  displayTotal()
};

// Results Page

// Toggle
$("#toggleWeekly").on("click", function(){
	$(this).addClass("toggleSelector");
  $("#toggleMonthly").removeClass("toggleSelector");
  $("#toggleTotal").removeClass("toggleSelector");
	displayWeekly();
});

$("#toggleMonthly").on("click", function(){
	$(this).addClass("toggleSelector");
  $("#toggleWeekly").removeClass("toggleSelector");
  $("#toggleTotal").removeClass("toggleSelector");
	displayMonthly();
});

$("#toggleTotal").on("click", function(){
	$(this).addClass("toggleSelector");
  $("#toggleWeekly").removeClass("toggleSelector");
  $("#toggleMonthly").removeClass("toggleSelector");
	displayTotal();
});

// fullPage.js

$(document).ready(function() {
	$('#fullpage').fullpage({
		autoScrolling:true,
	});
	$.fn.fullpage.setAllowScrolling(false);
});

$('.btnNext').on('click',function() {
  calculate()
  $("#fullpage").fullpage.moveSectionDown();
});

$('.btnBack').on('click',function() {
  $("#fullpage").fullpage.moveSectionUp();
});

$('.btnStartOver').on('click',function() {
  $("#fullpage").fullpage.moveTo(1);
});
