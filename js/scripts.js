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
