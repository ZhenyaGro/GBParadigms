function sortArrImperative(numbers) { // Пузырьковая сортировка
  /* 
  Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки.
  */
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}

function sortArrDeclarative(numbers) {
  // Написать точно такую же процедуру, но в декларативном стиле
  return numbers.sort((a, b) => b - a); // Метод массива 'Array.prototype.sort()'
}

const arr = [3, 4, 2, 5, 6, 7];
console.log(sortArrImperative(arr));
console.log(sortArrDeclarative(arr));