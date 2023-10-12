//Exercise 1: Object Destructuring
//ES5
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2,
//   },
// };
// var a = obj.numbers.a;
// var b = obj.numbers.b;
//ES2015
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};
const {
  numbers: { a, b },
} = obj;

// const { a, b } = obj.numbers;

//Exercise 2: Array Swap
//ES5
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
//ES2015
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//Exercise 3: raceResults
const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
