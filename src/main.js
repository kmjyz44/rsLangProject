
  fetch('https://leng-app.herokuapp.com/words?page=2&group=0')
    .then((data) => {
       
      return data.json();
    })
  .then(data => {
console.log(data)
  }) 