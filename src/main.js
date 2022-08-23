import { getWord} from "./book.js";
import {hide_number} from './book.js'
const wrapper_book = document.querySelector('.wrapper_book');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

wrapper_book.addEventListener('click',function (event)  {
  event.stopPropagation(true);
let n = event.target.getAttribute('data');
if(n !== null){
  getWord(n);
}
})


next.addEventListener('click', hide_number);
prev.addEventListener('click', hide_number);