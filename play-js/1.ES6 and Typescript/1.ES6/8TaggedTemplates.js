//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const name = 'jon';
const gender = true;

function myTagFunction(strings, arg1, arg2) {
  console.log(strings);
  console.log(arg1);
  console.log(arg2);
}

const result = myTagFunction`Hello , this is ${name} and I am ${gender}`;

// [nodemon] starting `node "8Tagged templates.js"`
// [ 'Hello , this is ', ' and I am ', '' ]
