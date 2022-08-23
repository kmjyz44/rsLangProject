import { getWord} from "./book.js";
import {hide_number} from './book.js'

const wrapper_book = document.querySelector('.wrapper_book');
const card_book = document.querySelectorAll('.card_book')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next'); 
next.addEventListener('click', hide_number);
prev.addEventListener('click', hide_number);
const pagination = document.querySelector('.pagination');
const pagination_active = document.querySelector('.pagination_active');
const namber_page = document.querySelector('.namber_page');
let n =0;
 let i = 0;
getWord(n,i);
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
namber_page.addEventListener('click',function (event)  {
  event.stopPropagation(true);
i = event.target.getAttribute('data');

if(i !== null && n !== null){
  getWord(n,i);

}
})
})


