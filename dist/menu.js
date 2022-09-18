
export  function getMenu (){
    let log_cooc = '';
    let enter = '';
    if(readCookie('usename')){
        log_cooc = readCookie('usename');
        enter = ''
    }
    else{
    log_cooc = '';
    enter = 'Вход'
    }
  const menu = document.querySelector('.menu-main');
  menu.innerHTML = '<li class="left-item"><a href="./index.html">Главная</a></li>'+
  '<li class="left-item"><a href="./book.html">Учебник</a></li>'+
  '<li class="left-item"><a href="">Аудиовызов</a></li>'+
  '<li class="right-item"><a href="./sprint.html">Спринт</a></li>'+
  '<li class="right-item"><a href="./statistic.html">Статистика</a></li>'+
  '<li class="right-item log_in"><a href="./entrance.html">'+enter+'</a></li>'+
  '<li class="right-item class = "log_out"><a href="./entrance.html">'+log_cooc+'</a></li>'    
}
let cooc = document.cookie;
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }

    return null;
}
