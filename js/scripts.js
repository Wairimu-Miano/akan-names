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
}
