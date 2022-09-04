import {getMenu} from "./menu.js"
 getMenu();
 
 let word_bad = [];
 let score = 1;
 let t;
 let i;
 let boolen;
 let arrEng=[];
 let arrRus =[];
 let count = 1;
 let setinter;
 const score_sprint = document.querySelector('.score_sprint');
 const yes_but = document.querySelector('.yes_but');
 const no_but = document.querySelector('.no_but');
 const english_word = document.querySelector('.english_word');
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
   
  await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')
   .then((data) => {
     return data.json();
   })
 .then(data => {
   data.forEach(element => {
      arrEng.push(element.word);
      arrRus.push(element.wordTranslate)
   })
})
}
  async function timer (){
  await getWordSprint(1,0) ;
   getRandomWord();
  
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

function getRandomWord(){
   t = Math.floor(Math.random() * 20);
   i = Math.floor(Math.random() * 20);
   english_word.innerHTML=(arrEng[t]);
   norus.innerHTML = (arrRus[i]);
   
}

   function yes_sprint(){
      if(t === i){
         score = score+10;
         score_sprint.innerHTML= score;
         
         return getRandomWord();
      }
      else
      {
         alert('Bad WORK');
         word_bad.push(arrEng[t]);
         return getRandomWord();
      }
   }
   function no_sprint(){
      if(t === i){
         alert('Bad WORK');
         word_bad.push(arrEng[t]);
        return getRandomWord();
      }
      else
      {
         score++;
         score_sprint.innerHTML= score;
         
         return  getRandomWord();
      }
   }
  
   no_but.addEventListener('click', no_sprint);
   yes_but.addEventListener('click', yes_sprint);
console.log(word_bad)
start.addEventListener('click', timer);