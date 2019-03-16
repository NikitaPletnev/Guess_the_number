//Задаю функцию старта игры
let start = (function() {
  //Задаю основные значения 
  let attempt = 9;
  let secretNum = Math.floor(Math.random() * 1000) + 1;
  //Основная логика игры
  return function() {
    let n;//Промежуточная переменная для работы цикла 
    while (!n) n = +prompt('Угадайте число');
    //Циклы проверки
    while (attempt > 0) {
      if (n == secretNum) {
        alert('Вы угадали!');
        return;
      }
      do {
        n = +prompt((secretNum > n ? 'Больше' : 'Меньше') + '! Осталось попыток: ' + attempt + "/10");
      } while (!n);
      attempt--;
    }
    alert(n == secretNum ? 'Вы угадали!' : 'Вы проиграли!');
    //Переигровка
    if (confirm('Начать новую игру?')) {
      attempt = 9;
      secretNum = Math.floor(Math.random() * 1000) + 1;
      start();
    }
  }
})();
