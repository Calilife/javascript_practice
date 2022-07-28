/*
'use strict'; 
let hasDriversLicense = false; 
const passTest = true; 

if (passTest) hasDriverLicense = true; 
if (hasDriversLicense) console.log('you can drive'); 

const interface = 'Audio'; 

const private = 'Audio';

function logger() {
    console.log('Myname is Sebastian'); 
}
//Calling / Runningm/ Invoking Function 
logger(); 
logger();
logger();
logger(); 

function FruitProcesser (apples, oranges){ 
    const juice = `Juice is ${apples} apples and ${oranges} oranges.`; 
    return juice; 
}

const juice = FruitProcesser(5, 0); 
console.log(juice); 

const appleOrangeJuece = FruitProcesser(2, 4); 
console.log(appleOrangeJuece);   

//function Declaration 
function calcAge1(birthYear) {
    return 2037 - birthYear; 
}
const age1 = (calcAge1(1990)); 

//function expression
const calcAge2 = function (birthYear2) {
    return 2037 - birthYear2; 
}
const age2 = calcAge2(1990); 

console.log(age1, age2); 

const calcAge3 = birthYear2 => 2037 - birthYear2;
const age3 = calcAge3(1990); 
console.log(age3);  
 
const yearUntilRetirements = (birthYear, firstName) => {
    const age = 2037 - birthYear; 
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;  
    //return retirement; 
}
console.log(yearUntilRetirements(1990, 'Sebastian')); 
console.log(yearUntilRetirements(1980, 'Paul')); 


//calling functions inside functions, we are using dry code. Best practices 
function cutFruitPieces (fruit){
    return fruit * 4; 
}

function FruitProcesser (apples, oranges){ 
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);  

    const juice = `Juice has ${applePieces} piecess of apple and ${orangesPieces} pieces of orange.`; 
    return juice; 
}

console.log(FruitProcesser(2, 3)); 



const calAge = function (birthYear) {
    return 2037 - birthYear; 
}


const yearUntilRetirements = function (birthYear, firstName)  {
    const age = calAge(birthYear);  
    const retirement = 65 - age;
     if (retirement > 0 ) { 
         console.log(`${firstName} retires in ${retirement} years`); 
         return retirement; 
     } else {
        console.log(`${firstName} has already retired 🍾`); 
         return -1; 

     }

    //return `${firstName} retires in ${retirement} years`;  

}
//console.log(yearUntilRetirements(1991, 'Sebastian')); 
console.log(yearUntilRetirements(1970, 'Mike')); 


const calcAverage = (a, b, c) => (a + b + c) / 3 ; 
 
const dolphinsAverage = calcAverage ( 44, 23, 71); 
const koalasAverage = calcAverage ( 65, 54, 49); 
console.log(dolphinsAverage, koalasAverage); 

const checkWinner = function(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= (koalasAverage * 2)){
        return `Dolphins win (${dolphinsAverage} vs ${koalasAverage})`;
    } else if (koalasAverage >= ( dolphinsAverage * 2)){
        return `Dolphins win (${dolphinsAverage} vs ${koalasAverage})`;
    } else {
        return `no winner`; 
    }
}
console.log(checkWinner(dolphinsAverage, koalasAverage)); 


const friends = ['sebastian', 'paul', 'angelica'];
console.log(friends); 

const y = new Array(1991, 1984, 2008, 2020); 
console.log(friends[0]); 
console.log(friends[2]); 
console.log(friends.length); 
console.log(friends[friends.length -1]); 

friends[2] = 'Jay'; 
console.log(friends); 

const firstName = 'Sebastian'
const sebastian = [firstName, 'Vesga', 2021 - 1990, 'Developer', friends]; 
console.log(sebastian); 


//excersice 

const calcAge = function(birthYear){
    return 2037 - birthYear; 
}
const years = [1990, 1967, 2002, 2010, 2018]; 
//console.log(calcAge(years)); 
const age1 = calcAge(years[0]); 
const age2 = calcAge(years[1]); 
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);  

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]; 
console.log(ages); 

const friends = ['sebastian', 'paul', 'angelica'];
//add elements
const newLengh = friends.push('Jay'); 
console.log(friends);
console.log(newLengh); 
//add elements and returrns lenght 
friends.unshift('Hernan'); 
console.log(friends); 
// removes last element and returns value 
friends.pop(); //last 
const popped = friends.pop();
console.log(friends); 
//returns value removed from the begining
console.log(popped); 
//returns value removed from the start
const shiftFirst = friends.shift(); 
console.log(shiftFirst, "here"); 
//returns index # 
console.log(friends.indexOf('paul')); 
//returns true or false
console.log(friends.includes('paul')); 
friends.push(23); 
console.log(friends.includes('23')); 
console.log(friends.includes(23)); 

if (friends.includes('paul')) {
    console.log('you have a friend!'); 
} else {
    console.log('No Friend found'); 
}

//my code is correct, but it's not clean. Need to apply dry code and array standards. 
 
// const tips = []; 
// const totals = [];  

// const calcTip = function (billValue){
//     if (billValue >= 50 || billValue <=300){
//         tips.push(billValue * .15);
//         total.push(billValue + (billValue * .15))
//         return (billValue * .15);  
//     } else {
//         tips.push(billValue * .20)
//         total.push(billValue + (billValue * .20))
//         return (billValue * .20);
//     }
// }
// calcTip(bills[0]);
// calcTip(bills[1]);
// calcTip(bills[2]); 
// console.log(tips, total); 

const bills = [125, 555, 44];
const calcTip = function (billValue){
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20; 
}
//always return values of an array in an array
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; 
const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
console.log(tips, totals); 


const sebas = {
    firstName: 'Sebastian', 
    lastName: 'Vesga', 
    age: 2037 - 1991, 
    job: 'Developer',
    friends : ['Paul', 'angy', 'jay']
}; 

console.log(sebas); 
console.log(sebas.lastName);
console.log(sebas['lastName']);

const nameKey = 'Name'; 
console.log(sebas['first' + nameKey]); 
console.log(sebas['last' + nameKey]); 

const interestedIn = prompt("What do you want to know about Sebastian choose between firstName, lastName, age, job, and friends?"); // if the value is not found we will receive a falsey value. UNDEFINED. 

if(sebas[interestedIn]){
    console.log(sebas[interestedIn]); 
} else {
    //any falsey value will come here. 
    console.log(`undefined - no property by the value of ${interestedIn}`); 
}

sebas.location = 'california'; 
sebas['twitter'] = 'www.twitter.com/vesgasebas';

console.log(sebas); 

//challenge 
// Sebastian has 3 friedns, and his best friend is called michael


console.log(`${sebas.firstName} has ${sebas.friends.length} and his best friend is called ${sebas.friends[0]}`); 

const sebas = {
    firstName: 'Sebastian', 
    lastName: 'Vesga', 
    birthYear: 1990, 
    job: 'Developer',
    friends : ['Paul', 'angy', 'jay'], 
    hasDriversLicense : true, 
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear; 
    // }
    // calcAge: function () {
    //     //console.log(this); 
    //     return 2037 - this.birthYear; 
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        //console.log(this); 
        return this.age;
    }, 
    getSummary: function () {
        return `${this['firstName']} ${this['lastName']} is a ${this.calcAge()} years old ${this['job']} and he has ${this.hasDriversLicense ? 'a':'not'} Drivers License`;
    }      
}; 
console.log(sebas.calcAge()); 
console.log(sebas.age); 
console.log(sebas.getSummary());

// write a method that will write a summary of Sebastians information
const userOneData = {
    fullName: 'Mark Miller', 
    mass: 78,
    height: 1.69, 

    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi
    }
}

const userTwoData = {
    fullName: 'John Smith', 
    mass: 92,
    height: 1.95,  

    calcBMI: function(){
        //user this word to add a new object properties
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi
    }
}

console.log(userTwoData.calcBMI() > userOneData.calcBMI() ? `${userTwoData.fullName}'s BMI (${userTwoData.bmi}) is higher than ${userOneData.fullName} BMI (${userOneData.bmi})` : `${userOneData.fullName}'s BMI (${userOneData.bmi}) is higher than ${userTwoData.fullName} BMI (${userTwoData.bmi})`); 


// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifthing Weights Repetition ${rep} 🚗`);
}
const sebas = [
    'Sebastian', 
    30, 
    'Vesga',  
    'Developer',
    'Paul', 
    'angy', 
    ['San Diego', 'California', 'Baja California']
]

const types = []; 

for (let i = 0; i < sebas.length; i++) {
    //const element = array[i]; 
    console.log(sebas[i], typeof sebas[i]); 
    
    //filling an array 
    // types[i] = typeof sebas[i]; 
    //push function will add items to the end of the array. 
    types.push(typeof sebas[i]); 

}
console.log(types);
const years = [1991, 2007, 1806, 2020]; 
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - (years[i]));
}
//console.log(ages); 

const sebas = [
    'Sebastian', 
    30, 
    'Vesga',  
    'Developer',
    'Paul', 
    'angy', 
    ['San Diego', 'California', 'Baja California']
]
console.log('------------ Continue with strings ------------------')
for (let i = 0; i < sebas.length; i++) {
    if (typeof sebas[i]!== 'string') continue; 
        console.log(sebas[i], typeof sebas[i]); 
}

console.log('------------Break with Numbers ------------------')
for (let i = 0; i < sebas.length; i++) {
    if (typeof sebas[i]=== 'number') break; 
    
    console.log(sebas[i], typeof sebas[i]); 
}
const sebas = [
    'Sebastian', 
    30, 
    'Vesga',  
    'Developer',
    'Paul', 
    'angy', 
    ['San Diego', 'California', 'Baja California']
]

for (let i = sebas.length - 1 ; i >= 0; i--) {
    console.log(sebas[i]); 
}

for (let excersice = 1; excersice < 4; excersice++) {
    console.log(`--------Starting Excersice ${excersice}`); 
    for (let rep = 1; rep <= 6; rep++) {
        console.log(`Excersice ${excersice}: Ligthing weight repetition ${rep}`); 
    }
}

let rep = 1
while (rep <=10) {
    console.log(`Excersice ${rep}: Ligthing weight repetition ${rep}`);
    rep++; 
}
//console.log(dice); 
let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) {
    console.log('The First Roll was 6'); 
}  
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1 ; 
    if (dice === 6) {
        console.log('the roll is about to finish'); 
    }
}
*/ 

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52]; 
const tips = []; 
const totals = []; 

const calcTip = function (billValue){
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
} 
 
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]); 
}
// console.log(tips);
// console.log(totals); 

const calcAverage = function(arr) {
    let averageTotal = 0;
    for (let i = 0; i < arr.length; i++) { 
        averageTotal += arr[i];  
    }
    return averageTotal / arr.length; 
}
const averageTotal = calcAverage(totals); 
console.log(averageTotal); 