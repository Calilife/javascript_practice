/*
let js = 'amazing'; 
console.log(40 + 8 + 23 - 10);

console.log("Jonas"); 
console.log(23); 

let firstName = "Sebastian"; 
console.log(firstName); 


// variable name conventions
let myForstJob = 'Programmer';

let country = "USA"; 
let continent = "North America"; 
let population = "1.8 B"; 
 
console.log(country, continent, population)

let javascriptIsFun = true;
console.log(true); 
 
console.log(typeof true);  
console.log(typeof 23);
console.log(typeof "Jonas");  

javascriptIsFun = "!Yes"; 
console.log(typeof javascriptIsFun);

let year; 
console.log(year); 
console.log(typeof year);

year = 1991; 
console.log(typeof year);

console.log(typeof null); 

let country = "USA"; 
let continent = "North America"; 
let population = "1.8"; 
 
console.log(country, continent, population)

let isIsland = false; 
let languaje; 
console.log(typeof country); 
console.log(typeof continent); 
console.log(typeof population); 
console.log(typeof languaje); 
console.log(typeof isIsland); 


let age = 30; 
age = 31; 

const now = 2037; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018; 
console.log(ageJonas, ageSarah); 

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
//3 means 2 to the power of 3  = 2* 2 * 2 

const firstName = "Jonas"; 
const lastName = "Schedemetan";
console.log(firstName + " " + lastName); 

//assigment operators 
let x = 10 + 5; // 15 
x += 10; //x= x/10 = 25 
x*= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100 
console.log(x);  

//comparason operators
//console.log(ageJonas > ageSarah); //>, <, >=, <= 
//console.log(ageSarah >= 18); 

//const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 208 ); 

const now = 2037; 
const ageJonas = now - 1991; 
const ageSarah = now - 2018; 

console.log(now - 1991 > now - 2018 );

//console.log(25-10-5);

let x, y; //empty values
x = y = 25 - 10 - 5; //  x = y = 10 
console.log(x,y); 

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge );

let bmi;
let mass; 
let height; 

bmi = mass / height ** 2 //= mass / (height * height); 

const massMark = 78; 
const heightMark = 1.69; 
const massJohn = 92; 
const heightJohn = 1.95; 
let markHigherBMI;

const BMIMark = massMark / heightMark **2 
const BMIJohn = massJohn / heightJohn **2
markHigherBMI = BMIMark > BMIJohn; 
console.log(BMIMark,BMIJohn);
console.log(markHigherBMI);

const firstName = "Jonas"; 
const job = "teacher"; 
const birthYear = 1991;
const year = 2037;  

const jonas = "i'm " + firstName + ", a " + (year - birthYear) + " years old " + job; 
console.log(jonas); 

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`; 
console.log(jonasNew); 

console.log(`this is sebastian.....`)


console.log(`String 
this is sebastian
new line`)


const age = 15; 

if (age >=18) {
    console.log(`Sarah can start driving a car 🚗`); 
} else {
    const yearsLeft = 18 - age; 
    console.log(`she is not able to drive yet, Wait another ${yearsLeft} years :) `); 
}

let century; 
const birthYear = 1991; 
 if (birthYear < 2000) {
    century = 20; 
 } else {
    century = 21; 
 }

 console.log(century); 


const massMark = 78; 
const heightMark = 1.69; 
const massJohn = 92; 
const heightJohn = 1.95; 
let markHigherBMI;

const BMIMark = massMark / heightMark **2 
const BMIJohn = massJohn / heightJohn **2
console.log(BMIMark,BMIJohn);


if (BMIMark > BMIJohn) {
    console.log(`Marks' BMI is higher than John's b/c his BMI is ${BMIMark}`)
} else {
    console.log(`John's' BMI is higher than Mark's b/c his BMI is ${BMIJohn}`)
}


// Type conversion
const inputYear = '1991'; 
console.log(Number(inputYear)+ 18); 
console.log(inputYear + 18); 

console.log()

//type coercion
console.log()



// 5 falsy values: 0, " ", undefined, null, NaN

const money = 0; // 0 is a falsy value 

if (money) { // 0 = false
    console.log(`dont spend it all ;)`); 
} else {
    console.log(`You should get a job`); 
}

let height; 
if (height) {
    console.log(`YAY! Height is defined`); 
} else {
    console.log(`Height is Undefined`)
}  

const age = 18; 

if (age === 18) console.log(`You just became an adult (Strict)`);
if (age == 18) console.log(`You just became an adult (Loose)`);

const favorite = Number(prompt("what is your favory number")); 
console.log(favorite); 
console.log(typeof favorite); 

if (favorite === 23) {
    console.log("cool! 23 is an amazing number")
} else if (favorite ===7){
    console.log("7 is also a cool number ") 
} else {
    console.log("Number is not 23 or 7")
}

const hasDriverLicense = true; //A 
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision); 
console.log(!hasDriverLicense); 

const shouldDrive = hasDriverLicense && hasGoodVision; 

// if (shouldDrive) {
//     console.log("Sarah is able to drive!"); 
// } else {
//     console.log('someone else should drive...')
// }

const isTired = false; // C 

console.log(hasDriverLicense && hasGoodVision && isTired); 

if (shouldDrive && !isTired) {
    console.log("Sarah is able to drive!"); 
} else {
    console.log('someone else should drive...')
} 

const dolphinsScore1 = 96; 
const dolphinsScore2 = 108;
const dolphinsScore3= 89; 
const koalasScore1 = 88; 
const koalasScore2 = 91; 
const koalasScore3 = 110; 

const averageDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3; 
const averageKoala = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(averageDolphins, averageKoala); 

const compareScore = averageDolphins > averageKoala

if (compareScore) {
    console.log("Dolphins have a higher Average than Koalas");
} else if (averageDolphins === averageKoala) {
    console.log("Both have the same average");
} else {
    console.log("Koalas have a higher Average than Dolphins");
}

if ((dolphinsScore1 > 100) || (dolphinsScore2 > 100) ||  (dolphinsScore3 > 100 && compareScore)) {
    console.log("Dolphins are the winners")
} else if ((koalasScore1 > 100) || (koalasScore2 > 100) ||  (koalasScore3 > 100 && !compareScore)) {
    console.log("Koala are the winners")
}


const day = "thursday"; 

switch (day) {
    case "monday":
        console.log("Plan course structure");
        console.log("Go to coding meet up");
        break;
    case "tuesday": 
    console.log("Prepare theory video");
        break;
    case "wednesday": 
    case "thursday": 
        console.log("Write code examples");
        break;  
    case "friday": 
        console.log('Record Videos'); 
        break; 
    case "saturday": 
    case "sunday": 
        console.log("Enjoy the weekend");
        break; 
    default:
        console.log("Not a valid day"); 
        break;
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meet up");
} else if (day === "tuesday") {
    console.log("Prepare theory video");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday" ) {
    console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day"); 
}

const age = 23; 

const canDrink = 5; 
console.log(canDrink);  

console.log(`I'm Sebastian and I like to drink ${age >= 18 ? "Wine" : "Water"}`); 



const bill = 275; 
const total = 0; 

const tip = bill >= 50 && bill <= 300 ? (bill * .15) : (bill * .20); 
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill > 0 ? (bill + tip) : "Undefined "}`); 

*/ 
