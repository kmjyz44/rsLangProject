export async function getWord (n){
    const word = document.querySelector('.word');
    let out='';
   await fetch('https://leng-app.herokuapp.com/words?page= '+n+'&group=0')
    .then((data) => {
       
      return data.json();
    })
  .then(data => {
    data.forEach(element => {
     out += '<li class = "li_case" data = "'+element.word+'">' +element.word+ '<br>'+ element.wordTranslate+'</li>';
   word.innerHTML = out;
        console.log(element); 
    });
  
  }) 
  }