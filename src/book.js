 async function getWord (n,i,a='travel'){
  
    const word = document.querySelector('.word');
    const word_card = document.querySelector('.word_card');
    let out='';
    let out_word='';
   await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')
    .then((data) => {
       
      return data.json();
    })
  .then(data => {
    data.forEach(element => {
     out += '<li class = "li_case" data = "'+element.word+'">' +element.word+ '<br>'+ element.wordTranslate+'</li>';
   
     word.innerHTML = out;
   //console.log (element);
   if(a == element.word){  
    out_word += '<img class = "img_word" src="https://leng-app.herokuapp.com/'+element.image+'"); alt="word"></img>'
    out_word += '<h3>'+element.word+'</h3>'
    out_word += '<h3>'+element.wordTranslate+'</h3>'
    out_word += '<div class="voice_div">'
    out_word += '<h3>'+element.transcription+'</h3>'
   
    out_word += '<audio id="myAudio" controls>'+
  '<source src="https://leng-app.herokuapp.com/'+element.audio+'" type="audio/mpeg">'+
  '</audio>' 
    out_word += '</div>'
    out_word += '<h3>Значение</h3>'
    out_word += '<h3>'+element.textMeaning+'</h3>'
    out_word += '<h3>Пример</h3>'
    out_word += '<h3>'+element.textExampleTranslate+'</h3>'
    
    word_card.innerHTML = out_word;
  
   }
   
    }); 
    
  }) 
  }
  
  const pagination = document.querySelectorAll('.pagination');
  if(pagination[0] !== undefined){
  pagination[0].classList.add('pagination_active');
  }
export function hide_number(){
  

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


const word = document.querySelector('.word');
const wrapper_book = document.querySelector('.wrapper_book');
const card_book = document.querySelectorAll('.card_book')

const namber_page = document.querySelector('.namber_page');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next'); 
next.addEventListener('click', hide_number);
prev.addEventListener('click', hide_number);


let n = 0;
 let i = 0;
 let a ='travel'
 getWord(n,i,a);
if(wrapper_book){}
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

  const li_case = document.querySelectorAll('.li_case');
a = event.target.getAttribute('data');
if(event.target.getAttribute('data') !==null &i !== null && n !== null){
  

getWord(n,i,a);
}
})

  export {getWord}