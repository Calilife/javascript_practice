'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Sebastian Vesga',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Angelica Robles',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Alicia Martinez',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Paul Guerra',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnWithdraw = document.querySelector('.form__btn--withdraw');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputWithdrawAmount = document.querySelector(
  '.form__input--withdraw-amount'
);
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort) {
  //cleaning the movements list
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

      <div class="movements__value">${mov}€</>
    </div  
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const euroToUsd = 1.1;
const movementsUsd = account1.movements.map(mov => mov * euroToUsd);

const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acco, mov) => acco + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumIn.textContent = `${income}€`;

  const expenses = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumOut.textContent = `${Math.abs(expenses)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `${interest}€`;

  const deposits = acc.movements.filter(mov => mov > 0);
  const withdrawls = acc.movements.filter(mov => mov < 0);
  const balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserName(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value.toLowerCase()
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display IU and Message
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();

    console.log(currentAccount);

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value.toLowerCase()
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('transfer succesfull');
    currentAccount.balance = currentAccount.balance - amount;
    //add amount to both objects.arrays
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //update IU
    updateUI(currentAccount);
  } else {
    console.log('incorrect amount');
  }

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value.toLowerCase() &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    //delete account
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentAccount.username),
      1
    );
  }
  //Clear values
  inputCloseUsername.value = inputClosePin.value = '';
  //hide UI
  containerApp.style.opacity = 0;

  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);

    //update UI to show the new value
    updateUI(currentAccount);
  } else {
    console.log('Cant loand that amount');
  }
  inputLoanAmount.value = '';
});

btnWithdraw.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputWithdrawAmount.value);
  if (amount > 0 && currentAccount.balance > amount) {
    currentAccount.balance = currentAccount.balance - amount;
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  }
  inputWithdrawAmount.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  console.log(sorted);
  sorted = !sorted;
  console.log(sorted);
});

//max value
/* const maxValue = account1.movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  account1.movements[0]
);
console.log(maxValue);

//const accout = accounts.find(acc => acc.owner === 'Angelica Robles');
let accountName;
accounts.forEach(function (curr, i, arr) {
  if (curr.owner === 'Angelica Robles') {
    accountName = curr;
  } else {
    console.log('not found');
  }
});

console.log(accountName); */
//curr.owner a=== 'Angelica Robles' ? curr.owner : 'not found'

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
//console.log(arr.slice(2));

//splice
console.log(arr.splice(2));
console.log(arr);

let arr2 = ['a', 'z', 't', 'm', 'e'];

console.log(arr2.reverse());
console.log(arr2); */

/* movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`You Deposit ${i + 1} : $${mov} ${arr}`);
  } else {
    console.log(`You Removed ${i + 1} : $${Math.abs(mov)}`);
  }
}); */

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//set
const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
 */

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/
//const dogsJulia = [3, 5, 2, 12, 7];
//const dogsKate = [4, 1, 15, 8, 3];

/* const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (ageArr1, ageArr2) {
  //creates a copy of the array
  const shallowCopyArr1 = ageArr1.slice();
  //deletes items from the array
  shallowCopyArr1.splice(0, 1);
  shallowCopyArr1.splice(-2);
  const shallowCopyArr2 = ageArr2.slice();

  const dogs = shallowCopyArr1.concat(shallowCopyArr2);

  dogs.forEach(function (item, i) {
    console.log(
      `Dog Number ${i + 1} is an ${
        item >= 3 ? 'Adult' : 'Puppy'
      }, and is ${item} years old`
    );
  });
};

checkDogs(dogsJulia, dogsKate); */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/* const calcAverageHumanAge = function (arr1, arr2) {
  const dogs = arr1.concat(arr2);
  const humanAgeDogs = dogs.map(curr => (curr <= 2 ? 2 * curr : 16 + curr * 4));
  const adultDogs = humanAgeDogs.filter(curr => curr >= 18);
  const averageAdultAge =
    adultDogs.reduce((acc, curr) => acc + curr) / adultDogs.length;

  console.log(humanAgeDogs);
  console.log(adultDogs);
  console.log(averageAdultAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3], [16, 6, 10, 5, 6, 1, 4]); */

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/* const calcAverageHumanAge = function (ages) {
  const averageAges = ages
    .map(curr => (curr <= 2 ? 2 * curr : 16 + curr * 4))
    .filter(curr => curr >= 18)
    .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  return averageAges;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
 */


// const arr = [1,2,3,4,5,6,7,8];

// //fill new array 
// const x = new Array(7); 
// x.fill(1); 
// console.log(x);

// // fill existing array 
// x.fill(7, 1, x.length ); 
// console.log(x);

//from array to create a new dinamic array 
// const y = Array.from({length: 7}, (() => 1)); 
// console.log(y);

// const z = Array.from({length: 7}, ((_, i) => i + 1)); 
// console.log(z);

// const z = Array.from({length: 100}, ((_, i) => Math.floor(Math.random() * 100 ))); 
// console.log(z);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'), 
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
})

const bankDepositSum = accounts
.map(acc => acc.movements)
.flat().filter(mov => mov > 0)
.reduce((sum, curr) => sum + curr, 0); 

console.log(bankDepositSum);

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1); 

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']; 

  const titleCase = title.toLowerCase().split(' ')
  .map(word => (exceptions.includes(word) ? word : capitalize(word)))
  .join(' '); 

  return capitalize(titleCase); 
}

console.log(convertTitleCase("And This is sebastian and his daugther Luisa the princesa"));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)



2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)); 
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const SarahsDog = dogs.find(dog => dog.owners.includes('Sarah')); 
console.log(SarahsDog);

console.log(SarahsDog.curFood >= SarahsDog.recFood ? "Too much" : "Too Little");

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners); 
const ownersEatTooLittle= dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!" 

const str = ownersEatTooMuch.join( " and ") +  's dogs eat too much! and ' + ownersEatTooLittle.join( " and ") +  's dogs eat too little!  '; 
console.log(str);

//5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

console.log(dogs.some(elem => elem.recFood === elem.curFood));

//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood > dog.recFood * 1.1; 1

console.log(dogs.some(checkEatingOkay));

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);