// Square and sum the array element using the arrow function and then find the average of the array.
let nums = [1, 2, 3, 4, 5];

let square = nums.map((nums) => nums * nums);
console.log(square);

let sum = square.reduce((acc, cou) => acc + cou, 0);

let avg = sum / nums.length;
console.log(avg);

//ques 2 Create a new array using the map function whose each element is equal to the original element plus 5/.

let number = [1, 2, 3, 4, 5, -3, -4];
console.log(number.map((num) => num + 5));

//ques 3 array having elements in uppercase

let words = ["peter parkar", "harry potter"];

console.log(words.map((word) => word.toUpperCase()));

//ques 4
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((v) => v * 2),
];
doubleAndReturnArgs([1, 2, 3], 4, 4);
doubleAndReturnArgs([2], 10, 4);

//ques 5

const mergeobjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeobjects({ a: 1, b: 2 }, { c: 3, d: 4 });
