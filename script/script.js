// Page Naviagtion
$ ("#goButton").on("click", function () {
  $(".page").html('<div class="page"> <div class="infoContainer"> <div id="basicsPage" class="info"> <div class="title"> BENEFITS<br>THAT<br>OUTWEIGH<br>THE COSTS </div> <h2> We get it, you’re not going to outlay these costs unless there’s some benefit. We got you covered look over here for some benefits of hiring an Intern </h2> </div> </div> <div class="formContainer"> <div class="form" id="basicsForm"> <div class="formHeader"> <h1>First Lets Get Some Basic Details</h1> </div> <br> <div class="sliderGroup"> <h3>What is your Intern’s hourly pay rate?</h3> <br> <div class="sliderContainer"> <div class="sliderInnerContainer"> <div class="sliderValue"> <div class="sliderMin"> <h3>$0</h3> </div> <div class="sliderMax"> <h3>$50</h3> </div> </div> <div class="silderDiv"> <input type="range" min="0" max="50" value="25" class="slider" id="hourlyRate"> </div> </div> <div class="sliderTextContainer"> <input type="text"> </div> </div> <br> <div class="sliderFeedback" id="feedbackHourlyRate"> <p> Excellent, that is within our recommended pay rates. </p> </div> <br> <div class="moreInformation"> <a href="#">How did we work this out</a> </div> </div> <br> <div class="sliderGroup"> <h3>How many days a week will they be working?</h3> <br> <div class="sliderContainer"> <div class="sliderInnerContainer"> <div class="sliderValue"> <div class="sliderMin"> <h3>1</h3> </div> <div class="sliderMax"> <h3>7</h3> </div> </div> <div class="silderDiv"> <input type="range" min="0" max="7" value="5" class="slider" id="daysPerWeek"> </div> </div> <div class="sliderTextContainer"> <input type="text"> </div> </div> <br> <div class="sliderFeedback" id="feedbackDaysPerWeek"> <p> Whoa!! This is starting to look like a full time role. We recommend 2 to 3 days </p> </div> <br> <div class="moreInformation"> <a href="#">How did we work this out</a> </div> </div> <br> <div class="sliderGroup"> <h3>How many hours a day will they work?</h3> <br> <div class="sliderContainer"> <div class="sliderInnerContainer"> <div class="sliderValue"> <div class="sliderMin"> <h3>1</h3> </div> <div class="sliderMax"> <h3>12</h3> </div> </div> <div class="silderDiv"> <input type="range" min="1" max="12" value="2" class="slider" id="hoursPerDay"> </div> </div> <div class="sliderTextContainer"> <input type="text"> </div> </div> <br> <div class="sliderFeedback" id="feedbackHourlyRate"> <p> They aren’t going to get much done in such a short shift, also you might be breaking labour laws. </p> </div> <br> <div class="moreInformation"> <a href="#">How did we work this out</a> </div> </div> <br> <div class="sliderGroup"> <h3>How many weeks is the internship?</h3> <br> <div class="sliderContainer"> <div class="sliderInnerContainer"> <div class="sliderValue"> <div class="sliderMin"> <h3>1</h3> </div> <div class="sliderMax"> <h3>52</h3> </div> </div> <div class="silderDiv"> <input type="range" min="1" max="52" value="32" class="slider" id="internWeeks"> </div> </div> <div class="sliderTextContainer"> <input type="text"> </div> </div> <br> <div class="sliderFeedback" id="feedbackInternWeeks"> <p> Thats a long time, are you sure this is an internship? It sounds more like a long term engagement? </p> </div> <br> <div class="moreInformation"> <a href="#">How did we work this out</a> </div> </div> <br> <button id="basicsButton">Next</button> </div> </div> </div>')
})
$ ("#basicsButton").on("click", function() {
  
})

// Test App

  // Set Hours Per Week

    var hoursPerWeek

    function getHoursPerWeek() {

      var daysPerWeek = 3;
      var hoursPerDay = 8;

      if (daysPerWeek <2) {
        console.log("days per week is too short")
      }
      else if (daysPerWeek >3) {
        console.log("days per week is too long")
      }
      else {
        console.log("days per week is correct")
      };
  
      if (hoursPerDay <4) {
        console.log("Shift is not long enough")
      }
      else if (hoursPerDay >8) {
        console.log("shift is too short")
      }
      else {
        console.log("shift is correct")
      };

      hoursPerWeek = hoursPerDay * daysPerWeek;
    }

    
  
    

    //Work Out Wages

    var weeklySuper

    var weeklyWages

    function getWeeklyWage() {
      var payRate = 30;

      if (payRate <25) {
        console.log("Pay is too Low")
      }
      else if (payRate>40) {
        console.log("Pay is too high")
      }
      else {
        console.log("Pay is correct")
      };
  
      var superPerHour = payRate * 0.095;
  
      weeklySuper = superPerHour * hoursPerWeek;
  
      weeklyWages = payRate * hoursPerWeek;
    }




    //Work Out Billings

    var internBillableHoursPerWeek

    var internBillingsPerWeek

    function getWeeklyBillings() {
      internBillableHoursPerWeek = hoursPerWeek / 2;

      var internBillRate = 90;
  
      internBillingsPerWeek = internBillRate * 4;
    }


    // Work Out Mentoring Costs

    var mentorHoursPerWeek
    var mentorCostPerWeek

    function getWeeklyMentor() {
      mentorHoursPerWeek = hoursPerWeek * 0.4;

      var mentorBillRate = 100;
  
      mentorCostPerWeek = mentorHoursPerWeek * mentorBillRate;
    }




    // Work Out Length Of Internship

    var internLength = 36

    function checkLength() {
      if (internLength <6) {
        console.log("Length is too Low")
      }
      else if (internLength >12) {
        console.log("internLength is too high")
      }
      else {
        console.log("Lenghth is correct")
      };
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

    if (displaySummary=="weekly") {
      displayWeekly()
    }
    else if (displaySummary=="monthly") {
      displayMonthly() 
    }
    else {
      displayTotal
    }
    
  }
  display()