//old way
function foo() {
  console.log;
}

//es6
const fooES6 = (n) => n + 1;

console.log(fooES6(100));

//The most benefit is that easy to write callback

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter((a) => a === 1);
