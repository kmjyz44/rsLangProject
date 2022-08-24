export async function getWord (n,i,a='travel'){
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
   console.log (element);
   if(a == element.word){  
    out_word += '<img class = "img_word" src="https://leng-app.herokuapp.com/'+element.image+'"); alt="word"></img>'
    out_word += '<h3>'+element.word+'</h3>'
    out_word += '<h3>'+element.wordTranslate+'</h3>'
    out_word += '<div class="voice_div">'
    out_word += '<h3>'+element.transcription+'</h3>'
    out_word += '<?xml  class = "voice_button" version="1.0" encoding="utf-8"?><!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" width ="30px" xml:space="preserve">'+
    '<path  class = "voice_button" fill="#81D4FA"  d="M28,7.1v2c7.3,1,13,7.3,13,14.9s-5.7,13.9-13,14.9v2c8.4-1,15-8.2,15-16.9S36.4,8.1,28,7.1z"/>'+
    '<path class = "voice_button fill="#546E7A"  d="M14,32H7c-1.1,0-2-0.9-2-2V18c0-1.1,0.9-2,2-2h7V32z"/>'+
    '<polygon class = "voice_button" fill="#78909C"  points="26,42 14,32 14,16 26,6 "/>'+
    '<path class = "voice_button fill="#03A9F4" d="M28,17.3v2.1c1.8,0.8,3,2.5,3,4.6s-1.2,3.8-3,4.6v2.1c2.9-0.9,5-3.5,5-6.7S30.9,18.2,28,17.3z"/>'+
    '<path class = "voice_button fill="#4FC3F7"  d="M28,12.2v2c4.6,0.9,8,5,8,9.8s-3.4,8.9-8,9.8v2c5.7-1,10-5.9,10-11.8S33.7,13.1,28,12.2z"/>'+
    '</svg>'
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
pagination[0].classList.add('pagination_active');

export function hide_number(){
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
