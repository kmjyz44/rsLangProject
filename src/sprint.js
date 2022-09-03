import {getMenu} from "./menu.js"
 getMenu();
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
   n = event.target.getAttribute('data');
  if(n !== null){
    getWord(n,0);
  }
  })
  