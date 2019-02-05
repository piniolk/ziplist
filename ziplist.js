/* Created by Piniolk on 2/4/2019 */

function zipList(arrayOne, arrayTwo) {
  const result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    result[i * 2] = arrayOne[i];
    result[i * 2 + 1] = arrayTwo[i];
  }
  return result;
}

const arrayA = ['a', 'b', 'c'];
const arrayB = ['1', '2', '3'];
console.log(zipList(arrayA, arrayB));

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  return _.map(arrayOne, arrayTwo, _.keys);
}

console.log(zipListTheSimpleWay(arrayA, arrayB));
