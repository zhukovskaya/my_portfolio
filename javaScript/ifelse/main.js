//1
function greaterNum(a, b) {
 	if(+a > +b) {
 		return a;
 	} else {
 		return b;
 	}
}	
a = 5;
b = 10;
console.log(greaterNum(5,10));
console.log("The greater number of " + a +  " and " + b + " is " + greaterNum(a, b) + ".");
a = 10;
b = 20;
console.log("The greater number of " + a +  " and " + b + " is " + greaterNum(a, b) + ".");

//2
function helloWorld(lang) {
	switch(lang) {
		case "es" :
		return "Hola mundo";
		break;
		case "de" :
		return "Hallo Welt";
		break;
		case "en" :
		return "Hello, World";
		break;
		default : 
		return "Hello, World";
	}
}
lang = "de"
console.log(helloWorld(lang))
lang = "en"
console.log(helloWorld(lang))
lang = "es"
console.log(helloWorld(lang))

//3

function assignGrade(score) {
	if(score>100) {
	return "A+"
	} else if(100 >= score && score >= 95) {
	return  "A";
	} else if(94 >= score && score >= 85) {
	return  "B";
	} else if(84 >= score && score >= 75) {
	return  "C";
	} else if(74 >= score && score >= 65) {
	return  "D";
	} else if(64 >= score && score >= 60) {
	return "E";
	} else if(59 >= score && score >= 0) {
	return "FX";
	} else {
	return "enter your score";
	}
}
console.log(assignGrade(88));
console.log(assignGrade(42));

//4

function pluralize(number, noun ) {
	if(+number < 1) {
		return "You enter wrong number.";
	} else if(+number == 1 || noun == "sheep") {
		return number + " " + noun;
	} else if(+number > 1 && noun == "goose") {
		return number + " " + "geese";
	} else {
		return number + " " + noun + "s";
	}
}	
console.log(pluralize(2, noun = "cat"));
console.log(pluralize(1, noun = "sheep"));
console.log(pluralize(1, noun = "dog"));
console.log(pluralize(5, noun = "goose"));
console.log(pluralize(-3, noun = "dog"));

// 1
var a = 1;
if(a == 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 0;
if(a == 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = -3;
if(a == 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
//2
var a = 1;
if(a > 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 0;
if(a > 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = -3;
if(a > 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
//3
var a = 1;
if(a < 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 0;
if(a < 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = -3;
if(a < 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
 //4
 var a = 1;
if(a >= 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 0;
if(a >= 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = -3;
if(a >= 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

//5
var a = 1;
if(a <= 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 0;
if(a <= 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = -3;
if(a <= 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
 //6

var a = 1;
if(a !== 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 0;
if(a !== 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = -3;
if(a !== 0) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

//7

var a = "test";
if(a == "test") {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = "тест";
if(a == "test") {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = 3;
if(a == "test") {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

//8 

var a = '1';
if(a === 1) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

var a = 1;
if(a === 1) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}
var a = 3;
if(a === 1) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

//9

var a;

a = true;
if(a == true) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

a = false;
if(a == true) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

a = true;
(a == true) ? console.log("Верно!") : console.log("Неверно!");

a = false;
(a == true) ? console.log("Верно!") : console.log("Неверно!");

//10
var test;

test = true;
if(test !== true) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

test = false;
if(test !== true) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

test = true;
(test !== true) ? console.log("Верно!") : console.log("Неверно!");

test = false;
(test !== true) ? console.log("Верно!") : console.log("Неверно!");

//11

var a = 2,
	b = 5,
	result;

result = a + b;
if(result < 5) {
	result *= 10;
	} else {
	result = 5;
	}

console.log(result);

a = 3;
b = 1;
result = a + b;
if(result < 5) {
	result *= 10;
	} else {
	result = 5;
	}
console.log(result);

//12

var a;
a = 5;
if(0 < a && a < 5) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

a = 0;
if(0 < a && a < 5) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

a = -3;
if(0 < a && a < 5) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

a = 2;
if(0 < a && a < 5) {
	console.log("Верно!");
} else {
	console.log("Неверно!");
}

//13
var a;
a = 5;
if(0 == a || a == 5) {  
	console.log(a /= 10);
} else {
	console.log(a += 7);
}

a = 0;
if(0 == a || a == 5) {
	console.log(a /= 10);
} else {
	console.log(a + 7);
}

a = -3;
if(0 == a || a == 5) {
 	console.log(a /= 10);
} else {
	console.log(a += 7);
}

a = 2;
if(0 == a || a == 5) {
	console.log(a /= 10);
} else {
	console.log(a += 7);
}

//14
var a;
a = 1;
if(1 == a || a == 3) {
	console.log("Неверно!");
} else {
	console.log("Верно!");
}

a = 0;
if(1 == a || a == 3) {
	console.log("Неверно!");
} else {
	console.log("Верно!");
}

a = 3;
if(1 == a || a == 3) {
	console.log("Неверно!");
} else {
	console.log("Верно!");
}

a = 2;
if(1 == a || a == 3) {
	console.log("Неверно!");
} else {
	console.log("Верно!");
}
//15
var a,
	b;
a = 1;
b = 3;
if(1 >= a && b >= 3) {
	console.log(a + b);
} else {
	console.log("Неверно");
}	

a = 0;
b = 6;
if(1 >= a && b >= 3) {
	console.log(a + b);
} else {
	console.log("Неверно");
}	

a = 3;
b = 5;
if(1 >= a && b >= 3) {
	console.log(a + b);
} else {
	console.log("Неверно");
}	


//16
var a;
a = 5;
if(0 < a && a < 5) {
	console.log(a += 1);
} else {
	console.log(a += 5);
}	
a = 0;
if(0 < a && a < 5) {
	console.log(a += 1);
} else {
	console.log(a += 5);
}
a = -3;
if(0 < a && a < 5) {
	console.log(a += 1);
} else {
	console.log(a += 5);
}	
a = 9;
if(0 < a && a < 5) {
	console.log(a += 1);
} else {
	console.log(a += 5);
}		

//17
var a,
	b;
a = 1;
b = 3;
if(2 < a && a < 11 || b >= 6 && b < 14) {
	console.log(a += 2);
} else {
	console.log(a += 5);
}	



// var a = +prompt("Введите число а");
// var b = +prompt("Введите число b");
// console.log (a, b);
// var c = a + b;
// alert(c);



// var x = +prompt("Введите кол-во баллов от 0 до 100");
// var mark;
// if(x>100) {
// 	mark = A+
// }	else if(100 >= x && x =< 95) {
// 	mark = "A";
// } else if(94 >= x && x <= 85) {
// 	mark = "B";
// }	else if(84 >= x && x <= 75) {
// 	mark = "C";
// }	else if(74 >= x && x <= 65) {
// 	mark = "D";
// } 	else if(64 >= x && x <= 60) {
// 	mark = "E";
// }	else if(59 >= x && x <= 0) {
// 	mark = "FX";
// }	else {
// 	"enter balls";
// };


// alert(mark);


// var numberOfChildren = 3,
// 	partnerName = "Ann",
// 	geographicLocation = "Canada", 
// 	jobTitle = "driver";

// console.log ("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");


// var correntYear = 2016,
// 	birthYear = 1985,
// 	age1,
// 	age2;

// age1 = correntYear - birthYear;
// age2 = age1-1;
// console.log ("They are either " + age1 + " or " + age2 + ".");

// var age = 31,
// 	maxAge = 100,
// 	applesPerDay = 2,
// 	appelesPerLife;
	
// appelesPerLife = (maxAge - age) * 365 * applesPerDay;
// console.log ("You will need " + appelesPerLife + " apples to last you until the ripe old age of " + maxAge + " .");



// var i,
// 	mark;
// for (i = 0; i<5; i+=1) {
// 	mark = prompt("Enter mark")
// 	if (mark >= 60) {
// 		prompt("passed");
// 	} else {
// 		break;
// 	}
// }

// var perform;
// var number1 = +prompt("Enter first number ")
// var number2  = +prompt("Enter second number ")
// while (stop) {
// 	perform = prompt ("Enter what move you want!")

// 	switch(perform) {
// 		case "Addition" :
// 		console.log(number2 + number 1);
// 		case "Addition" :
// 		console.log(number2 + number 1);
// 		break;
// 		case "That's all" :
// 		stop = false;
// 		break;
// 		default:
// 			console.log("Wrong operation")
// 	}
// }
// */