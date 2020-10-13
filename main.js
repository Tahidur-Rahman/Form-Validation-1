const form = document.getElementById('form'),
      username = document.getElementById('username'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      password2 = document.getElementById('password2');
      
form.addEventListener('submit',
  e => { e.preventDefault();
        checkInputs();
        });

function checkInputs(){
  const usernameValue = username.value.trim(),
      emailValue = email.value.trim(),
      passwordValue = password.value.trim(),
      password2Value = password2.value.trim();

 if(usernameValue === '' ){
//   show error
//    add error class
   setErrorFor(username,'Username cannot be blank')
}
else{
  setSuccessFor(username)
   }
  
  if(emailValue === '' ){
//   show error
//    add error class
   setErrorFor(email,'E-mail address cannot be blank')
}else if(!isEmail(emailValue)){
  setErrorFor(email,' Invalid E-mail address')
}
else{
  setSuccessFor(email)
   }
  
   if(passwordValue === '' ){
//   show error
//    add error class
   setErrorFor(password,'password cannot be blank')
}
else{
  setSuccessFor(password)
   }
  
  
   if(password2Value === '' || passwordValue != password2Value ){
//   show error
//    add error class
   setErrorFor(password2,'password didn\'t matched')
}
else{
  setSuccessFor(password2)
   }
}



function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  
  small.innerText = message;
  formControl.className = 'form-control error'
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  
  formControl.className = 'form-control success'
}

function isEmail(email){
  return   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

 