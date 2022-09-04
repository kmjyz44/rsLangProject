import {getMenu} from "./menu.js"
 getMenu();
 let count = 1;
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

  function timer (){
   if(count<9){
      clearInterval(settimer);
   let settimer = setInterval (()=>{
      ++count;
      timer_sprint.innerHTML=+count;
   } ,1000);
   }
   
      clearInterval(settimer);
   }
  
start.addEventListener('click', timer);
 