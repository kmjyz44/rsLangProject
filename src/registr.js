
const email = document.getElementById('#email');
const pass = document.getElementById('#pass');
const repass = document.getElementById('#repass');
const submit_reg = document.querySelector('#submit_reg');
const reg_user = document.querySelector('#reg_user');


function log(){  
if(reg_user.pass.value.length<8){
  alert ("Пароль должен содержать не менее 8 символов. ");
  }
  if(reg_user.pass.value !== reg_user.repass.value){
    alert ("Пароли не совпадают!!!"); 
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(reg_user.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    // return (false)
}

//reg_user.submit_reg.addEventListener('click',log);


     //
    async function  createUser () { 
    const rawResponse = await fetch('https://leng-app.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({"email": reg_user.email.value , "password": reg_user.pass.value })
      
    });
    const content = await rawResponse.json();
    console.log(content)
    console.log(rawResponse.status)
    
  }
   reg_user.submit_reg.addEventListener('click',(createUser,log));
 

export{log}
