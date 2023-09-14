function multiplicationTable(n) {
  /*
  Условие
  На вход подается число n.
  Задача
  Написать скрипт в любой парадигме, который выводит на экран таблицу умножения всех чисел от 1 до n.
  Обоснуйте выбор парадигм.
  Пример вывода:
  1 * 1 = 1
  1 * 2 = 2
  1 * 3 = 3
  1 * 4 = 4
  1 * 5 = 5
  1 * 6 = 6
  ..
  1 * 9 = 9
  */
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      const result = i * j;
      console.log(`${i} * ${j} = ${result}`);
    }
  }

}

const n = 5;
multiplicationTable(n);