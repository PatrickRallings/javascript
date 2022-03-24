// 1. Simple Stuff
function getFirstValue(num) {
  return num[0];
}
console.log(getFirstValue([1, 2, 3]));

// 2. Fix the Bugs
function incrementItems(num2) {
  return num2.map((num2) => num2 + 1);
}
console.log(incrementItems([1, 2, 3]));

// 3. Rotate an Array
function rotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}
console.log(rotate([1, 2, 3]));