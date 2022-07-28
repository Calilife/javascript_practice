'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milenial = true;
      //Creating new variable with the same name as iyt scope's variable
      const firstName = 'Paul';

      //Reassigning outer scope's variable
      const str = `oh, and you're a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      output = 'New Output!';
    }
    console.log(milenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'sebastian';
calcAge(1991);


console.log(addDel(2, 3));

function addDel(a, b) {
  return a + b;
}

var addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deleteShoppingcart();

var numProducts = 10;

function deleteShoppingcart() {
  console.log();
}



var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAge2 = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1991);


const sebas = {
  firstName: 'sebastian',
  lastName: 'Vesga Martinez',
  year: 1991,
  calcAge4: function () {
    console.log(2037 - this.year);
  },
};

sebas.calcAge4();

const matilda = {
  year: 2017,
};

matilda.calcAge = sebas.calcAge4;

matilda.calcAge();

const f = sebas.calcAge4;

f();

const sebas = {
  firstName: 'sebastian',
  lastName: 'Vesga Martinez',
  year: 1991,
  calcAge4: function () {
    console.log(2037 - this.year);
  },

  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};

sebas.greet();

//primitive types 
let lastName = 'Guerra';
let oldLastName = lastName;
lastName = 'Vesga';
console.log(lastName);
console.log(oldLastName);

//reference types 
const sebas = {
  firstName: 'Sebastian',
  lastName: 'Vesga',
  age: 30,
};

const marriedSebastian = sebas;
marriedSebastian.lastName = 'Robles';
console.log(marriedSebastian.lastName);
console.log(sebas.lastName);

//marriedSebastian = {};

const sebas2 = {
  firstName: 'Sebastian',
  lastName: 'Vesga',
  age: 30,
};

const sebasCopy = Object.assign({}, sebas2);
sebasCopy.lastName = 'Robles';
console.log(sebasCopy.lastName);
console.log(sebas2.lastName);

const numeros = [2, 3, 4];
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];

console.log(a, b, c);

const [x, y, z] = numeros;

console.log(x, y, z);


const restaurant = {
  name: 'Clasico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegeratian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function (starterMenuIndex, mainMenuIndex, address, time) {
    console.log(starterMenuIndex, mainMenuIndex, address, time);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(` here is your pastta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

restaurant.orderDelivery({
  time: '22:00',
  address: 'Via del Sole, 21',
  mainMenuIndex: 2,
  starterMenuIndex: 2,
});

const newCopyMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(newCopyMenu);

//real-world example b
const ingredients = [
  prompt("let's make past, Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients);

restaurant.orderPasta(ingredients);

const { name, openHours, categories } = restaurant;

const {
  name: restauranteName,
  openHours: hoursOp,
  categories: tags,
} = restaurant;
console.log(restauranteName, hoursOp, tags);

const {
  fri: { open: abierto, close: cerrado },
} = hoursOp;
console.log(abierto, cerrado);

let [main, , secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [5, 6]];



const restaurant = {
  name: 'Clasico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegeratian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function (starterMenuIndex, mainMenuIndex, address, time) {
    console.log(starterMenuIndex, mainMenuIndex, address, time);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(` here is your pastta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderingPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

SPREAD Operator
const array = [2, 3, ...[3, 4]];
console.log(array);

//REST Operator
const [a, b, ...others] = [2, 4, 6, 7, 9];
console.log(a, b, others);

const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherfood);

const { sat, ...restOfWeek } = restaurant.openHours;
console.log(sat);

restaurant.orderingPizza('MUSHROOMS', 'TOMATOES', 'ONIONS');

console.log(3 || 'Jonas');
//restaurant.numGuests = 23;
//const guess1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guess1);

const guess2 = restaurant.numGuests || 10;
console.log(guess2);

restaurant.numGuests = 0;
const guess1 = restaurant.numGuests || 10;
console.log(guess1);



//const players1 = ['gk', 'mid', 'lat', 'del'];
//const players2 = ['gk', 'mid', 'lat', 'del'];

// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
//1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const players = [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
];

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players,
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals(...players) {
    let sum = 0;
    for (let i = 0; i < players.length; i++) {
      console.log(`${players[i]} scored a goal `);
      sum += 1;
    }
    console.log(`Total of ${sum} goal(s) scored`);
  },
  winner: '',
};

const [players1, players2] = [...game.players];

const [gk, ...fieldPlayers] = [...players1];
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

game.printGoals(...game.scored);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');

console.log(game);

for (const printArray of game.players.entries()) {
  console.log(printArray);
}



const openHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Clasico Italiano',
  categories: ['Italian', 'Pizzeria', 'Vegeratian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openHours,

  order(starterMenuIndex, mainMenuIndex) {
    return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery(starterMenuIndex, mainMenuIndex, address, time) {
    console.log(starterMenuIndex, mainMenuIndex, address, time);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(` here is your pastta with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderingPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};
//option chaining
// console.log(restaurant.openHours.mon?.open);
// console.log(restaurant.openHours?.mon?.open);

//example optional chaining
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  const open = restaurant.openHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

const users = [{ name: 'sebastian', email: 'sebas@gmail.com' }];

console.log(users[0]?.name ?? 'User array empty');

const properties = Object.keys(openHours);
console.log(properties);

let openStr = `We are open ${properties.length} of the week, the following days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//property values
const values = Object.values(openHours);
console.log(values);

//entire object
const entries = Object.entries(openHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we pen at ${open} and close at ${close}`);
}



const players = [
  [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
  ],
  [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
  ],
];

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players,
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals(...players) {
    let sum = 0;
    for (let i = 0; i < players.length; i++) {
      console.log(`${players[i]} scored a goal `);
      sum += 1;
    }
    console.log(`Total of ${sum} goal(s) scored`);
  },
  winner: '',
};

for (const [score, player] of game.scored.entries()) {
  console.log(`Goal ${score + 1}: ${player}`);
}

const values = Object.values(game.odds);
let average = 0;
for (const odds of values) average += odds;
average /= values.length;
console.log(`The average of Odds is : ${average}`);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team == 'x' ? 'Draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

const questions = new Map([
  ['question', 'What is the best programming language'],
  [1, 'Java'],
  [2, 'C#'],
  [3, 'Javascript'],
  [true, 'Your answer was correct 🎉'],
  [false, 'Your answer was not correct, please try again'],
  ['correct', 3],
]);

console.log(questions.get('question'));
for (const [key, valu] of questions) {
  if (typeof key === 'number') {
    console.log(`Option ${key}: ${valu}`);
  }
}

const answer = Number(prompt('Your Answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// if (questions.get('correct') === answer) {
//   console.log(questions.get(true));
// } else console.log(questions.get(false));

const gameEvent = new Map([
  [17, '⚽️ Goal'],
  [36, '▶️ Substitution'],
  [47, '⚽️ Goal'],
  [61, '▶️ Substitution'],
  [64, '📒 Yellow Card'],
  [69, '📕 Red Card'],
  [70, '▶️ Substitution'],
  [72, '▶️ Substitution'],
  [76, '⚽️ Goal'],
  [80, '⚽️ Goal'],
  [92, '📒 Yellow Card'],
]);

// gameEvent.delete(64);
// console.log(gameEvent);

const events = [...new Set(gameEvent.values())];
console.log(events);

for (const [key, value] of gameEvent) {
  if (key == 64) gameEvent.delete(key);
  // key < 45
  //   ? console.log(`[First Half] Min ${key}: ${value}`)
  //   : console.log(`[Second Half] Min ${key}: ${value}`);
  // Better code
  const half = key < 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF ${key}: ${value}`);
}

const timeGame = [...gameEvent.keys()].pop();

console.log(
  `An event happended, on average, avery ${timeGame / gameEvent.size} minutes`
);

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  console.log(s);
  if (s === 'B' || s === 'C') {
    console.log(`You got an excellent seat`);
  } else console.log(`your seat was not so good`);
};

checkMiddleSeat('32B');
checkMiddleSeat('32A');
checkMiddleSeat('32C');
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;
