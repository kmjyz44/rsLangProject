import {getMenu} from "./menu.js"
 getMenu();
 
 let q=1;
 let n;
 let count_word =0;
 let out;
 let word_bad = [];
 let score = 1;
 let t;
 let i;
 let boolen;
 let arrEng=[];
 let arrRus =[];
 let count = 1;
 let setinter;
 const div_card = document.querySelector('.div_card');
 const level_sp = document.querySelector('.level_sp');
 const level_sprint = document.querySelector('.level_sprint');
 const continue_sprint = document.querySelector('.continue_sprint');
 const begin_sprint = document.querySelector('.begin_sprint');
 const book_card = document.querySelector('.book_card');
 const badWords = document.querySelector('.badWords');
 const sprint = document.querySelector('.sprint');
 const score_card = document.querySelector('.score_card');
 const res_card = document.querySelector('.res_card');
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
    n= event.target.getAttribute('data');
    card_book.forEach(element => {
      element.classList.remove('book_active')  

     });
     if(event.target.getAttribute('data') !==null){
    event.target.classList.add('book_active');
     }
  })
  level_sp.innerHTML=q;
async function getWordSprint(q=1,n=0){
   
  await fetch('https://leng-app.herokuapp.com/words?page= '+q+'&group='+n+'')
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
  await getWordSprint(q,n) ;
   getRandomWord();
  start.style.display='none';
   setinter = setInterval(countSprint,1000);  
   no_but.addEventListener('click', no_sprint);
   yes_but.addEventListener('click', yes_sprint);
}

 async function countSprint(){
   if(count<60){
   count++;
      timer_sprint.innerHTML=+count;
      timer_collor.style.width = count*6+'px';
   }
   else{
      clearInterval(11);
      sprint.style.display = 'none';
      res_card.style.display = 'block';
      score_card.innerHTML = score;
     // word_repiat();
   }
 }

function getRandomWord(){
   t = Math.floor(Math.random() * 20);
   i = Math.floor(Math.random() * 20);
   english_word.innerHTML=(arrEng[t]);
   norus.innerHTML = (arrRus[i]);
   book_card.style.background="none";
}

   function yes_sprint(){
      if(t === i){
         score = score+10;
         score_sprint.innerHTML= score;
      
         return getRandomWord();
      }
      else
      {
         book_card.style.background="red"
         setTimeout(()=>{
         word_bad.push(arrEng[t]);
         return getRandomWord();
      },100);
      }
   }
   function no_sprint(){
      if(t === i){
         book_card.style.background="red"
         setTimeout(()=>{
         word_bad.push(arrEng[t]);
         return getRandomWord();
      },100);
      }
      else
      {
         score++;
         score_sprint.innerHTML= score;
         
         return  getRandomWord();
      }
   }
  
start.addEventListener('click', timer);
continue_sprint.addEventListener('click',getLevel)

async function word_repiat(){
   for(let i =0; i<10; i++){ 
      if(word_bad[i]!=undefined){
      count_word++;
     div_card.innerHTML += '<p class = "badWords">'
      +count_word+'.'+word_bad[i]+
       '</p>';
      }
}
}

function getLevel(){
   if(q != 20){
      q++;
      level_sprint.innerHTML=q;
      level_sp.innerHTML = q;
       sprint.style.display = 'block';
       res_card.style.display = 'none';
       count =0;
       //remuveWordBad();
       timer ();
   }
}
function remuveWordBad(){
   const badWords = document.querySelector('.badWords');
   for(let i; i < word_bad.length;i++){
   delete word_bad[i];
   }
   badWords.remove();
}