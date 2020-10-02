function what() {
  
}
function Fnamecheck() {
    var name = document.getElementById('FName').value;
    var filter= /^[a-zA-Z]*$/;
    
    if (!filter.test(name) || name=="") {
        document.getElementById("errorFname").textContent="Please provide a valid First Name";
        document.getElementById("FName").style.borderColor = "Red";
        document.getElementById("errorFname").style.color = "Red";
      return false;
    } 
  else {
          document.getElementById("LName").style.borderColor = "Green";
    return true;
    } 
}
function Lnamecheck() {
    var name = document.getElementById('LName').value;
    var filter= /^[a-zA-Z]*$/;
    
    if (!filter.test(name) || name=="") {
        document.getElementById("errorLname").textContent="Please provide a valid Last Name";
        document.getElementById("errorLname").style.color = "Red";
        document.getElementById("LName").style.borderColor = "Red";
      return false;
    } 
  else {
          document.getElementById("LName").style.borderColor = "Green";
    return true;
    } 
}

function datecheck(){
  var is_16;
  /*errorDate*/
    var dob =new Date(document.getElementById('date').value);
    var currentDate =new Date();           
    var currentyear  = parseInt(currentDate.getFullYear());
    var currentmonth  = parseInt(currentDate.getMonth()) +1 ;
    var currentday  = parseInt(currentDate.getDate());
    var DOBmonth = parseInt(dob.getMonth()) + 1;    
    var DOBday   =  parseInt(dob.getDate());  
    var DOByear  = parseInt(dob.getFullYear());

if(currentyear-DOByear>=18){
is_16=true;
}
else{
  document.getElementById("date").style.borderColor = "Red";
    document.getElementById("errorDate").textContent="Must Be 18 Years Old";
    document.getElementById("errorDate").style.color = "Red";

    return false;
}

if (currentmonth<=DOBmonth){ 
is_16=true;
}
else {document.getElementById("date").style.borderColor = "Red";
  document.getElementById("errorDate").textContent="Must Be 18 Years Old";
    document.getElementById("errorDate").style.color = "Red";
  return false;  

}

if (currentday>=DOBday){ 
  is_16=true;
}
else {document.getElementById("date").style.borderColor = "Red";
  document.getElementById("errorDate").textContent="Must Be 18 Years Old";
    document.getElementById("errorDate").style.color = "Red";
  return false;
}

if (is_16===true)
  {  document.getElementById("date").style.borderColor = "Green";
     return true;
  }
  
}


function checkEmail() {
    var email = document.getElementById('InputEmail').value;
    var filter= /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var tag=document.getElementById("errorId");
    
if(email!=null && email!="")    
    {
      if (!filter.test(email)) {
    tag.textContent="Please provide a valid email address";
   tag.style.color="red";
      document.getElementById("InputEmail").style.borderColor = "Red";
      return false;
    } 
  else {
          document.getElementById("InputEmail").style.borderColor = "Green";
    return true;
    }
   }
}
function checkPassword() {
  var pswd=document.getElementById('InputPassword').value;
    var email = document.getElementById('InputEmail').value;
    var tag=document.getElementById("errorpswd"); 
    var filter;
  if(pswd!=null && pswd!="")
    { if(pswd==email)
      {tag.textContent="Email Id and Password cannot not be same";
    tag.style.color="red";}
      if(pswd.length < 6)
        { document.getElementById("InputPassword").style.borderColor = "Red";
        tag.textContent="Oops!Your Password is too short";
        tag.style.color="red";
          return false;}
      filter=/[A-Z]/;
        if(!filter.test(pswd)){
          tag.textContent="Password must include ateast one Uppercase letter";
          tag.style.color="red";
          document.getElementById("InputPassword").style.borderColor = "Red";
          return false;}

       filter=/[a-z]/;
        if(!filter.test(pswd)){
          tag.textContent="Your Password does not contain Lowercase letter";
          tag.style.color="red";
          document.getElementById("InputPassword").style.borderColor = "Red";
          return false;}
       filter=/[0-9]/;
        if(!filter.test(pswd)){
          tag.textContent="Wait! there is no digit in your Password";
          tag.style.color="red";
          document.getElementById("InputPassword").style.borderColor = "Red";
          return false;}
        document.getElementById("InputPassword").style.borderColor = "green";
        return true;
    }

}
  
function validateall()
  {  
   var tag=document.getElementById("btn");
if(Fnamecheck() &&Lnamecheck() && datecheck() && checkEmail() &&checkPassword())
{
form.form1.button.submit();  
}
else{
        tag.style.color="red";
        tag.textContent="Something wrong, validate all field again";}



}