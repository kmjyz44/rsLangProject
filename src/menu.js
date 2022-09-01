
export function getMenu (login = 'Вход'){
  const menu = document.querySelector('.menu-main');
  menu.innerHTML = '<li class="left-item"><a href="">Главная</a></li>'+
  '<li class="left-item"><a href="./book.html">Учебник</a></li>'+
  '<li class="left-item"><a href="">Аудиовызов</a></li>'+
  '<li class="right-item"><a href="">Спринт</a></li>'+
  '<li class="right-item"><a href="">Статистика</a></li>'+
  '<li class="right-item log_in"><a href="./entrance.html">'+login+'</a></li>'  
}