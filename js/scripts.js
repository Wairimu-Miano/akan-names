//Arrays to store Akan names
var maleNames=['Kwame','Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi']
var femaleNames=['Ama','Akosua','Adwoa','Abenaa','Akua','Yaa','Afua']
//Create a function
//Create a variable to store the extracted date entered in the form
function submitStaff(){
  //Create variables to store the extracted date entered in the form
  var dateInput=new Date(form.dob.value)
  //Extract month, year and date
  var date = dateInput.getDate();
  var month = dateInput.getMonth() + 1;
  var year = dateInput.getFullYear();
  //CALCULATE DAY OF THE WEEK USING FORMULA
  //We first need to adjust the months to fit working using Zeller's Algorithm:For January month=13,Feb month=14, others are normal
  if (month===1||month===2){
    zellerMonth=month+12
    zellerYear=year-1
  } else {
    zellerMonth=month
    zellerYear=year
  }
  //Then we divide the year into two, century part and actual Year of the century
  var century=parseInt(zellerYear.toString().substr(0,2))
  var yearYY=parseInt(zellerYear.toString().substr(2,2))
  //Insert FORMULA
  var day=(date+Math.floor(2.6*(month+1))+yearYY+Math.floor(yearYY/4)+Math.floor(century/4)-(2*century))%7
  //With Zellers Formula, 0=Saturday,1=Sunday,2=Monday and so on. This has been incorporated when creating the name Arrays
  //FUNCTION TO RETURN Name, after checking gender
  var gender=form.gender.value
  var result
  if (gender==="male") {
    alert("Your Akan name is " + maleNames[day] +"!!");
  } else {
    alert("Your Akan name is " + femaleNames[day]+"!!")
  }
}
