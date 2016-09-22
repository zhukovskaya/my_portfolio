// 1

var numberOfChildren = 3,
	partnerName = "Ann",
	geographicLocation = "Canada", 
	jobTitle = "driver";

console.log ("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");

// 2

var correntYear = 2016,
	birthYear = 1985,
	age1,
	age2;

age1 = correntYear - birthYear;
age2 = age1-1;


//3
var age = 31,
	maxAge = 100,
	applesPerDay = 2,
	appelesPerLife;
	
appelesPerLife = (maxAge - age) * 365 * applesPerDay;
console.log ("You will need " + appelesPerLife + " apples to last you until the ripe old age of " + maxAge + " .");

//4

var radius = 5,
	circumference,
	area;

circumference = Math.PI * 2 * radius;
area = Math.PI * radius * radius; 

console.log ("The circumference is " + circumference + ".");
console.log ("The area is " + area + ".");

//5

var celsiusTemp = 10,
	fahrenheitTemp;
fahrenheitTemp = celsiusTemp * 9 / 5 + 32;
console.log (celsiusTemp + "°C is " + fahrenheitTemp + "°F");

var fahrenheitTemp = 10,
	celsiusTempf;
celsiusTempf = (fahrenheitTemp - 32) * 5 / 9;
console.log (fahrenheitTemp + "°F is " + celsiusTempf + "°C.");