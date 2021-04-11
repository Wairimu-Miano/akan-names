//Arrays to store Akan names
var maleNames=['Kwame','Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi']
var femaleNames=['Ama','Akosua','Adwoa','Abenaa','Akua','Yaa','Afua']
//Create a function to extract date, month and year from entered dates of Birth
(function() {
    $('#submit').on('click', function(){
      var dateInput = new Date($('#dob').val());
      date = dateInput.getDate();
      month = dateInput.getMonth() + 1;
      year = dateInput.getFullYear();
    });
})();
//CALCULATE DAY OF THE WEEK USING FORMULA
  //We first need to adjust the months to fit working using Zeller's Algorithm
  if (month===1||month===2){
    zellerMonth=month+12
    zellerYear=year-1
  } else {
    zellerMonth=month
    zellerYear=year
  }
  //Then we divide the year into two, century part and actual Year
  var century=zellerYear(0,2)
  var yearYY=parseInt(zellerYear.substr(2,2))
  //Insert FORMULA
  var day=((parseInt((26*(zellerMonth+1)/10))+ zellerYear+parseInt(zellerYear/4)-parseInt(zellerYear/100)+parseInt(zellerYear/400)+date)%7)
  //FUNCTION TO RETURN Name, after checking gender
  if (document.getElementById('male').checked) {
  alert("Your Akan name is " + maleNames[day]);
} else{
  alert("Your Akan name is " + femaleNames[day])
}
