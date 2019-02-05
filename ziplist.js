/* Created by Piniolk on 2/4/2019 */

function zipList(arrayOne, arrayTwo) {
  const result = [];
  for (let i = 0; i < arrayOne.length; i++) {
    result.push(arrayOne[i], arrayTwo[i]);
  }
  return result;
}

const arrayA = ['1', '2', '3'];
const arrayB = ['a', 'b', 'c'];
console.log(zipList(arrayA, arrayB));

function zipListTheSimpleWay(arrayOne, arrayTwo) {
  return _.flatten(_.zip(arrayOne, arrayTwo));
}

console.log(zipListTheSimpleWay(arrayA, arrayB));
