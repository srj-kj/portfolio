var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('contact-name').value; 
  if(name.length==0){
    nameError.innerHTML='Name is Required';
    
    
    return false;
  }
  if(!name.match(/(^[A-Za-z]{3,16})([ ]{1})([A-Za-z]{2,16}$)/)){
    nameError.innerHTML='Write Full Name';
    return false;
}
nameError.innerHTML='<t style="color:seagreen;">valid <i class="fa-solid fa-square-check "></i></t>';
return true;
}
function validateEmail(){
  var email = document.getElementById('contact-email').value; 
  if(email.length==0){
    emailError.innerHTML='Email is Required';
    
    
    return false;
  }
  if(!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
    emailError.innerHTML='Enter a valid Email';
    return false;
}
emailError.innerHTML='<t style="color:seagreen;">valid <i class="fa-solid fa-square-check "></i></t>';
return true;
}
function validatePhone(){
  var phone = document.getElementById('contact-phone').value; 
  if(phone.length==0){
    phoneError.innerHTML='Phone Number is Required';
    
    
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='Enter a valid 10 digit phone Number';
    return false;
}
phoneError.innerHTML='<t style="color:seagreen;">valid <i class="fa-solid fa-square-check "></i></t>';
return true;
}
function validateMessage(){
  var message = document.getElementById('contact-message').value; 
  if(message.length==0){
    messageError.innerHTML='Your Message is Required';
    
    
    return false;
  }
  if(message.length<=10){
    var required =10;
    var left=required-message.length;
    messageError.innerHTML=left+'more Charectors Required';
    return false;
    }

messageError.innerHTML='<t style="color:seagreen;">valid <i class="fa-solid fa-square-check "></i></t>';
return true;
}
function validateForm(){
  if(!validateName()||!validateEmail()||!validatePhone()||!validateMessage()){
   submitError.style.display='block';
    submitError.innerHTML='Please fill the required Fields';
    // setTimeout(function(){submitError.style.display='none';},3000);
    return false;
  }

}

