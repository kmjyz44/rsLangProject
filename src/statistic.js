import {getMenu} from "./menu.js"
 getMenu();

export async function getStatistic(){
await fetch('https://leng-app.herokuapp.com/users/630fb5b70180d00016112799/statistics', 
{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  
    body: JSON.stringify({"email": "result" , "password": '111111111' })
    
});
  
  const content = await rawResponse.json();
  console.log(content);
  console.log('kdnhkwhbd');
}

getStatistic()
