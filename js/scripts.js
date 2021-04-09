//Arrays to store Akan names
var maleNames=['Kwame','Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi']
var femaleNames=['Ama','Akosua','Adwoa','Abenaa','Akua','Yaa','Afua']
//Create a function to extract date, month and year from entered dates of Birth
function newDate=new Date(dob){
  var month=newDate.getMonth()+1
  var date=newDate.getDate()
  var year=newDate.getFullYear()
  console.log(month+"-"+date+"-"+year)
}
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
  
