import {getMenu} from "./menu.js"
 
getMenu();
const login = document.querySelector("#login");
const username = document.getElementById('#username');
const passlog = document.querySelector('#passlog');
const submit_log = document.querySelector('#submit_log');
const log_in = document.querySelector('.log_in');

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
         document.cookie = "usename = guest"
    }
    else{
      alert(`Добро пожаловать ${login.username.value}`)
      
      //document.location.href = "./index.html";
      let d = new Date();
      d.setTime(d.getTime()+(24*60*60*1000));
      let expires = d.toUTCString();
      document.cookie = `usename = ${login.username.value}; expires=${expires};path=/`;
      
    }
   
    const content = await rawResponse.json();
   
    console.log(content);
    createUserWord({
        userId: content.userId,
        wordId: "5e9f5ee35eb9e72bc21af716",
        word: { "difficulty": "weak", "optional": {testFieldString: 'test', testFieldBoolean: true} },
        token: content.token
      });

    getUserWord({
        userId: content.userId,
        wordId: "5e9f5ee35eb9e72bc21af716",
        token: content.token
      });
      
    

  };
  
  //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYzk5M2RmNGNhOWQ2MDAxNzg3NDBhZSIsImlhdCI6MTU5MDI2OTE1OCwiZXhwIjoxNTkwMjgzNTU4fQ.XHKmdY_jk1R7PUbgCZfqH8TxH6XQ0USwPBSKNHMdF6I';
  const createUserWord = async ({ userId, wordId, word,token }) => {
    const rawResponse = await fetch(`https://leng-app.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'POST',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(word)
    });
    const content = await rawResponse.json();
  
    console.log(content);
  };
  
  const getUserWord = async ({ userId, wordId,token }) => {
    const rawResponse = await fetch(`https://leng-app.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'GET',
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      }
    });
    const content = await rawResponse.json();
  
   // console.log(content);
  };
  
 login.submit_log.addEventListener('click', loginUser);
 