//Static class

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect

const person = {
  name: 'jon',
  age: 30,
};

const proxy = new Proxy(person, {
  get(target, property) {
    console.log('watch logic~');

    return Reflect.get(target, property);
  },
});

console.log('name' in person);
console.log(delete person['age']);
console.log(Object.keys(person));

console.log(Reflect.has(person, 'name'));
console.log(Reflect.deleteProperty(person, 'name'));
console.log(Reflect.ownKeys(person));
