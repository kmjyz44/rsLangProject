import {getMenu} from "./menu.js"
 getMenu();
 let arr=[];
 let count = 1;
 let setinter;
 const timer_collor = document.querySelector('.timer_collor');
 const norus = document.querySelector('.norus');
 const start = document.querySelector('.start');
 const timer_sprint = document.querySelector('.timer_sprint');
 const wrapper_book = document.querySelector('.wrapper_book');
 const card_book = document.querySelectorAll('.card_book');
 wrapper_book.addEventListener('click',function (event)  {
    event.stopPropagation(true);
    card_book.forEach(element => {
      element.classList.remove('book_active')  
     });
     if(event.target.getAttribute('data') !==null){
    event.target.classList.add('book_active');
     }
  })

async function getWordSprint(i,n){
   let out='';
   let out_word='';
  await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')
   .then((data) => {
      
     return data.json();
   })
 .then(data => {
   data.forEach(element => {
    out = element.wordTranslate;
    arr.push(out)
    norus.innerHTML = out;
   
   })
   console.log(arr[6])
  })
}

  function timer (){
   getWordSprint(1,0) ;
   setinter = setInterval(countSprint,1000);  
   
}


 function countSprint(){
   if(count<60){
   count++;
      timer_sprint.innerHTML=+count;
      timer_collor.style.width = count*6+'px';
   }
   else{
      clearInterval(11);
   }
 }
start.addEventListener('click', timer);
 