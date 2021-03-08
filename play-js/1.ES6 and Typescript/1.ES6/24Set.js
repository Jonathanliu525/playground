//similor to array, but value in set is unique
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const s = new Set();

s.add(1).add(2).add(3).add(2).add('f');

console.log(s);

s.forEach((a) => console.log(a));

for (let a of s) {
  console.log(a);
}

console.log(s.size);

console.log(s.delete(3));

console.log(s.has(3));

s.clear();

const array = [1, 2, 3, 4, 4, 5, 5];

const set = new Set(array);

console.log(set);

const newArray = Array.from(set);

console.log(newArray);
