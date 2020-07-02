// Page Naviagtion

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