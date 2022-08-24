import { getWord} from "./book.js";
import {hide_number} from './book.js'


const word = document.querySelector('.word');
const wrapper_book = document.querySelector('.wrapper_book');
const card_book = document.querySelectorAll('.card_book')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next'); 
next.addEventListener('click', hide_number);
prev.addEventListener('click', hide_number);
const namber_page = document.querySelector('.namber_page');

let n =0;
 let i = 0;
 let a ='travel'

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
  getWord(n,i,0);
}
})
})
word.addEventListener('click', function(event){
//document.addEventListener('load', (event) => {
  const li_case = document.querySelectorAll('.li_case');
a = event.target.getAttribute('data');
if(event.target.getAttribute('data') !==null &i !== null && n !== null){
  

// li_case.forEach(element => {
//   element.classList.remove('.li_case_active');
// })
// event.target.classList.add('.li_case_active');
getWord(n,i,a);
}
})
async function getelementcard(){
await getWord(n,i,a);

}
getelementcard();
