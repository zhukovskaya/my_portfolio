//Напиши функцию создания генератора sequence(start, step). Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
function sequence(start, step) {
  step = step || 1;
  start -= step;
  function a() {
  	start = start + step || 0;
  	return start;
} return a;
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8


//Также, нужна функция take(fn, count) которая вызвает функцию fn заданное число (count) раз и возвращает массив с результатами вызовов. 
function take(fn, count) {
	var a = [];
	for (var i = 0; i < count; i++) {
		a[i] = fn();
	} return a;
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

//Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. 
function map(fn, array) {
 newArray = [];
 for (var i = 0; i < array.length; i++) {
		newArray[i] = fn(array[i]);
	} return newArray;
}

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

