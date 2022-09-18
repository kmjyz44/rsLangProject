import {getMenu} from "./menu.js"
 getMenu();
 
 let words={};
 let img_sprint =[];
 var audio = new Audio();
 var audio2 = new Audio();
 let q=1;
 let n;
 let count_word =0;
 let out;
 let word_bad = new Set();
 let score = 1;
 let t;
 let i;
 let boolen;
 let audio_sprint = [];
 let arrEng=[];
 let arrRus =[];
 let count = 1;
 let x;
 
 let setinter;
 const sprint_game = document.querySelector('.sprint_game');
 const audio_sp = document.querySelector(".audio_sp");
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

async function getWordSprint(q,n=0){
  await fetch('https://leng-app.herokuapp.com/words?page= '+q+'&group='+n+'')
   .then((data) => {
     return data.json();
   })
 .then(data => {
   data.forEach(element => {
      arrEng.push(element.word);
      arrRus.push(element.wordTranslate);
      audio_sprint.push(element.audio);
      img_sprint.push(element.image);
   })
})
}
  async function timer (){
   await getWordSprint(q,n);
   getRandomWord();
  start.style.display='none';
   setinter = setInterval(countSprint,1000);  
   no_but.addEventListener('click', no_sprint);
   yes_but.addEventListener('click', yes_sprint);
   
}

 async function countSprint(){
   if(count<30){
   count++;
      timer_sprint.innerHTML=+count;
      timer_collor.style.width = count*6+'px';
   }
   else{
      clearInterval(setinter);
      sprint.style.display = 'none';
      res_card.style.display = 'block';
      score_card.innerHTML = score;
      audio.stop();
     word_repiat();
   }
 }

function getRandomWord(){
   t = Math.floor(Math.random() * 16);
   i = Math.floor(Math.random() * 17);
   english_word.innerHTML=(arrEng[t]);    
  audio2.src = ('https://leng-app.herokuapp.com/'+audio_sprint[t]);
  audio2.autoplay = true;
   norus.innerHTML = (arrRus[i]);
   book_card.style.background="none";
   getAudioBut('./mp3/countdown.mp3');
}

   function yes_sprint(){
      if(t === i){
         score = score+10;
         score_sprint.innerHTML= score;
        
         setTimeout(()=>{
            getAudioBut('./mp3/pob.mp3');
         book_card.style.backgroundImage = "url('./img/present.gif')";
         book_card.style.backgroundRepeat = "no-repeat";
      },150);
         
         return getRandomWord();
      }
      else
      {
         setTimeout(()=>{
            getAudioBut('./mp3/no2.mp3');
            book_card.style.backgroundImage = "url('./img/person.gif')";
            book_card.style.backgroundRepeat = "no-repeat";
        },150);
         setTimeout(()=>{
            word_bad.add(words = {en:arrEng[t],ru:arrRus[t],au:audio_sprint[t],im:img_sprint[t]});
         return getRandomWord();
      },100);
      }
   }
   function no_sprint(){
      if(t === i){
         getAudioBut('./mp3/no2.mp3');
         setTimeout(()=>{
            book_card.style.backgroundImage = "url('./img/person.gif')";
            book_card.style.backgroundRepeat = "no-repeat";
         },150);
         setTimeout(()=>{
         word_bad.add(words = {en:arrEng[t],ru:arrRus[t],au:audio_sprint[t],im:img_sprint[t]});
         return getRandomWord();
      },100);
      }
      else
      {
         score++;
         score_sprint.innerHTML= score;
         getAudioBut('./mp3/scoreaudio.mp3');
         return  getRandomWord();
      }
   }
  
start.addEventListener('click', timer);
continue_sprint.addEventListener('click',getLevel);

//Добавляем статистику по игре(суму очков.Слова которые не удалось угадать)
async function word_repiat(){
   let out ='';
   for(let i of word_bad){ 
      if(i!==undefined){
    out  += '<p class = "badWords">'+i.en+'---'
      +i.ru+'</p>';
      out += '<audio id="myAudio" class = "myAudio" controls>'+
  '<source src="https://leng-app.herokuapp.com/'+i.au+'" type="audio/mpeg">'+
  '</audio>' ;
  out += '<img class = "img_word_sprint" src="https://leng-app.herokuapp.com/'+i.im+'"); alt="word"></img>';
      }
}
if(out !== undefined){
div_card.innerHTML = out;
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
       arrEng =[];
       arrRus=[];
       word_bad.clear();
       audio_sprint=[];
       img_sprint =[];
       remuvWordRep();
       screen_sprint ( Math.floor(Math.random()*(27-1)+1));
       timer ();
   }
}

function getAudioBut(a){
            audio.src = a;
            audio.autoplay = true;
           
}
Audio.prototype.stop = function() {
        this.pause();
         this.currentTime = 0;
   };

   function remuvWordRep(){
      while(div_card.firstChild){
         div_card.removeChild(div_card.firstChild);
      }
   }

   function screen_sprint (x){
      let screen = 'url'+"("+'./img/Sprint/'+x+'.jpg'+")";
      sprint.style.backgroundImage = (screen);
      console.log (screen);
   }

   

   screen_sprint ( Math.floor(Math.random()*(27-1)+1));