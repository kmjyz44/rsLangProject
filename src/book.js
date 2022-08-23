export async function getWord (n,i,a='travel'){
    const word = document.querySelector('.word');
    let out='';
   await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')
    .then((data) => {
       
      return data.json();
    })
  .then(data => {
    data.forEach(element => {
     out += '<li class = "li_case" data = "'+element.word+'">' +element.word+ '<br>'+ element.wordTranslate+'</li>';
   word.innerHTML = out;
   if(a == element.word){    
   console.log (element.wordTranslate)
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
