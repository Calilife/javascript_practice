// PENDING: Remember, NOTE: we're gonna use strict mode in all scripts now!
'use strict';

// function positiveSum(arr) {
//   let sum = 0;
//   const positiveNums = arr.filter(positiveNum => positiveNum >= 0);
//   for (let i = 0; i < positiveNums.length; i++) {
//     sum += positiveNums[i];
//   }
//   return sum;
// }

// console.log(positiveSum([1, -2, 3, 4, 5]));

//TODO: // PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const temperatures2 = [4, -2, -6, -1, 'error', 44, 23, 17, 15, 14, 9, 5];

// //How to calculate amplitude.
// // - How can I calculate amplitude
// // - you get the highest temp subsctracts the lowes
// // how to catch if there's an error.

// const calcAmplitude = function (temps1, temps2) {
//   let temps3 = temps1.concat(temps2);
//   let max = temps3[0];
//   let min = temps3[0];

//   for (let i = 0; i < temps3.length; i++) {
//     if (typeof temps3[i] !== 'number') continue;
//     const currentTemp = temps3[i];
//     if (currentTemp >= max) max = currentTemp;
//     if (currentTemp <= min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitud = calcAmplitude(temperatures, temperatures2);
// console.log(amplitud);

// const measureKenvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'cels',
//     value: Number(prompt('Degrees celsius')),
//   };
//   console.table(measurement);
//   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   debugger;
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // identify the bug
// console.log(measureKenvin());

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// Display string with temperatures with their respective day #
//create a string literal with the values I need

const printForecast = function (arr) {
  const fullPrint = [];
  for (let i = 0; i < arr.length; i++) {
    const stringTemp = `... ${arr[i]}C in ${
      arr.findIndex(temp => temp === arr[i]) + 1
    } days`;
    fullPrint.push(stringTemp);
  }
  console.log(fullPrint.join(' ') + '...');
  return fullPrint;
};

printForecast(data1);
