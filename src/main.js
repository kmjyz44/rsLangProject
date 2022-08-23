import { getWord} from "./book.js";
const wrapper_book = document.querySelector('.wrapper_book');


wrapper_book.addEventListener('click',function (event)  {
  event.stopPropagation(true);
let n = event.target.getAttribute('data');
if(n !== null){
  getWord(n);
}
})
const next = document.querySelector('.next');
const pagination = document.querySelectorAll('.pagination');
pagination[0].classList.add('pagination_active');

function hide_number(){
  console.log(1);
   if(pagination[0].classList.contains('pagination_active')){
    pagination[0].classList.remove('pagination_active');
    pagination[2].classList.remove('pagination_active');
    pagination[1].classList.add('pagination_active');
    
   }
    else if(pagination[1].classList.contains('pagination_active')){
    pagination[1].classList.remove('pagination_active');
    pagination[0].classList.remove('pagination_active');
    pagination[2].classList.add('pagination_active');
   
   }
   else
   if(pagination[2].classList.contains('pagination_active')){
    pagination[2].classList.remove('pagination_active');
    pagination[1].classList.remove('pagination_active');
    pagination[0].classList.add('pagination_active');
    
   }
  }


next.addEventListener('click', hide_number);
