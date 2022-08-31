
const login = document.querySelector("#login");
const username = document.getElementById('#username');
const passlog = document.querySelector('#passlog');
const submit_log = document.querySelector('#submit_log');


async function loginUser () {
   
    const rawResponse = await fetch('https://leng-app.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email": login.username.value, "password": login.passlog.value })
      
    });
    if(rawResponse.status !=200 ){
        alert('Введен не правильный логин или пароль!')
    }
    const content = await rawResponse.json();
   
    console.log(content);
  };
  
//   loginUser({ "email": 'hello22@user.com"', "password": 'Gfhjkm_123'});
  
 login.submit_log.addEventListener('click', loginUser);