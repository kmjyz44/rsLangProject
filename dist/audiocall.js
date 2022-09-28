import {getMenu} from "./menu.js"

const wrapper_book_audiocall = document.querySelector('.wrapper_book_audiocall')
 getMenu();
 let audio = new Audio();
 let trueWord = [];
 let n = 0;
 let arrRus =[];
 let click_word;
 let random2;
 let random;
 let audio_sprint =[];
 let img_sprint =[];
 const start_audiocall = document.querySelector('.start_audiocall');
 const card_book = document.querySelectorAll('.card_book');
 const nav_audio = document.querySelector('.nav_audio');
 wrapper_book_audiocall.addEventListener('click',function (event)  {
    event.stopPropagation(true);
    n= event.target.getAttribute('data');
    card_book.forEach(element => {
      element.classList.remove('book_active')  

     });
     if(event.target.getAttribute('data') !==null){
    event.target.classList.add('book_active');
     }
  })
  
  start_audiocall.addEventListener('click',  Start);
//получаем слова, картинки и аудио и заполняем масивы
  async function getWordSprint(q,n=0){
    await fetch('https://leng-app.herokuapp.com/words?page= '+q+'&group='+n+'')
     .then((data) => {
       return data.json();
     })
   .then(data => {
     data.forEach(element => {
        // arrEng.push(element.word);
        arrRus.push(element.wordTranslate);
        audio_sprint.push(element.audio);
        img_sprint.push(element.image);
     })
  })
  
  }

  
  //получаем рандомные ответы
  
 async function getRus (){
    for(let i =0; i<6;i++){
         random = Math.floor(Math.random() * (19 - 0) + 0);
        getAudioBut('https://leng-app.herokuapp.com/'+audio_sprint[random]);
         random2 = Math.floor(Math.random() * (19 - 0) + 0);
        nav_audio.innerHTML += '<h1 class="word_audio" data = '+random2+'>'+arrRus[random2]+
   '</h1>';

    }   
}

    async function Start(){
       await getWordSprint(0,0);
      await  getRus ();
      eventWord ();
    }


//Получаем любой звук
    function getAudioBut(a){
        audio.src = a;
        audio.autoplay = true;
    }
   
    //Очистка масива и екрана
    async function remuvWordRep(){
        while(nav_audio.firstChild){
            nav_audio.removeChild(nav_audio.firstChild);
       arrRus=[];
       audio_sprint=[];
       img_sprint =[];
        }
     }
//Выбираем слово проверяем правильный ответ 

    async function eventWord (){ 
      nav_audio.addEventListener('click', event =>{
     click_word = event.target.getAttribute('data');
     event.stopPropagation();
     console.log(click_word+'___'+random)
     if (click_word == random){
         alert('POBEDA');
     }
        })
     }