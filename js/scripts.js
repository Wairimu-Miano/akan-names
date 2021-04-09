var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
var femaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
function day(dob){
  //SPLIT Date

  //CALCULATION OF DAY
  day=(((dob.indexOf(6,7)/4)-2*dob.indexOf(6,7)-1)+((5*dob.indexOf(8,9)))
  if (gender="Male"){

  }
}





var maleNames=['Kwame','Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi']
var femaleNames=['Ama','Akosua','Adwoa','Abenaa','Akua','Yaa','Afua']

function dob(name){
  //SPLIT DATE INTO YEAR,MONTH AND DATE & CONVERT THE ARRAY ITEMS INTO NUMBERS
  var dateArray=new Date()
  var month=dateArray.getMonth()+1
  var date=dateArray.getDate()
  var year=dateArray.getFullYear()
  console.log(month+"-"+date+"-"+year)
  //CALCULATE DAY OF THE WEEK USING FORMULA
  //We first need to adjust the months to fit working using Zeller's Algorithm
  if (month===1||month===2){
    zellerMonth=month+12
    zellerYear=parseInt(year)-1
  } else {
    zellerMonth=month
    zellerYear=parseInt(year)
  }
  console.log(typeof year)
  //DIVIDE THE YEAR INTO CC AND YY(CENTURY AND YEAR)
  /*
  var century=year(0,2))
  var yearYY=parseInt(year.toString.substr(2,2))
  //INSERT ZELLER ALGORITHM
  //day=(((parseInt((century/4))-2*century-1) + (parseInt(5*yearYY/4)) + parseInt((26*(zellerMonth+1)/10)) + date)%7)

  day=((parseInt((26*(zellerMonth+1)/10))+ zellerYear+parseInt(zellerYear/4)-parseInt(zellerYear/100)+parseInt(zellerYear/400)+date)%7)
  console.log(day)

}
dob()
let result=alert("Your Akan name is " + maleNames[day])
console.log("Your Akan name is " +maleNames[day])
//Create an object that matches the number of day of the week to the actual day
/*if gender="Male"{
  alert("Your Akan name is " + maleNames[day])
} else{
  alert("Your Akan name is " + femaleNames[day])
}*/
