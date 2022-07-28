'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

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

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  //Pro coder
  for (const [i, n] of rows.entries()) {
    const [first, last] = n.toLowerCase().trim().split('_');
    const output = `${first}${last.replace(
      last[0],
      last[0].toLocaleUpperCase()
    )}`;
    console.log(`${output.padEnd(25)}${'✅'.repeat(i + 1)}`);
  }
  // for (let n = 0; n < rows.length; n++) {
  //   const element = rows[n].trim().split('_').join('').toLowerCase();
  //   //rows[n] = element.split('_').join('').toLowerCase();
  //   console.log(`${element.padEnd(25)}${'✅'.repeat(n + 1)}`);
  // }
});

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, fromCity, toCity, flightTime] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔️' : ''}${type
    .replaceAll('_', ' ')
    .trim()} from ${fromCity.slice(0, 3).toUpperCase()} to ${toCity
    .slice(0, 3)
    .toUpperCase()} (${flightTime.replace(':', 'h')})`.padStart(45, '->');
  console.log(output);
}
