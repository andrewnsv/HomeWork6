/* 
Создайте массив длинною в 15 елементов, заполните его случайными числами от 0 - 20. ВАЖНО, ЭТОТ МАССИВИ БУДЕТ УЧАВСТВОВАТЬ ВО ВСЕХ ЗАДАНИЯХ НИЖЕ. И НЕ ДОЛЖЕН БЫТЬ ИЗМЕНЕН!
ВСЕ ОПЕРАЦИИ БУДУТ НАД ЭТИМ МАССИВОМ.
Выведите все элементы которые делятся на 3 в консоль
Выведите первый элемент, который больше 7, если такого нет, напишите что все элементы меньше 7и
Выведете массив. в котором каждый элемент умножен на 2. (ИСХОДНЫЙ МАССИВ ИСПОЛЬЗУЕМ ИЗ ПУНКТА 1)
Сложить все четные элементы массива
Удалите из массива первый элемент и выведете резаультат, затем удалите последний элемент и выведите результат 
*/

// for ( i = 0; i < 15; i++ ) {
//     mainArray.push(Math.round( Math.random() * 20))
// }
// console.log(mainArray)

const mainArray = [19, 15, 9, 18, 16, 15, 15, 8, 10, 5, 6, 6, 16, 5, 13];

const result = mainArray.filter((num) => num % 3 === 0);
console.log(result);

const result2 = mainArray.find((num) =>
  num > 7 ? num : console.log("все элементы меньше 7")
);
console.log(result2);

const result3 = mainArray.map((num) => num * 2);
console.log(result3);

const result4 = mainArray.reduce(
  (acc, value) => (acc += value % 2 ? 0 : value),
  0
);
console.log(result4);

const result5 = mainArray.shift();
console.log(mainArray);

const result6 = mainArray.pop();
console.log(mainArray);


/*
ДАНО:
Определить какие элементы массива arrayTwo есть в arrayOne.
вывести массив с этими элеентами 
*/

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
const arrayThree = [];

arrayThree.push(arrayTwo.filter(item => arrayOne.includes(item)));

console.log(arrayThree);