//for
//for in
//foreach

//for ..of would be the unified way to loop data structure

const arr = [100, 200, 300, 400];

for (const item of arr) {
  console.log(item);
}

const s = new Set(['foo', 'bar']);

for (const item of s) {
  console.log(item);
}

const m = new Map();
m.set('foo', '123');
m.set('bar', '345');

for (const item of m) {
  console.log(item);
}
// [ 'foo', '123' ]
// [ 'bar', '345' ]

for (const [key, value] of m) {
  console.log(key);
  console.log(value);
}

const obj = { foo: 123, bar: 456 };

// This will give an error, because object is not iterable
for (const item of obj) {
  console.log(item);
}
