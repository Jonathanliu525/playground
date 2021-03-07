//Firast advantage, can monitor more operation on object
const person = {
  name: 'Jon',
  age: 18,
};

const personProxy = new Proxy(person, {
  deleteProperty(target, property) {
    console.log('This is caught by delete', property);
    delete target[property];
  },
});

delete personProxy.age;
console.log(person);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

//Second advantage, better support for array

const array = [];

const arrayProxy = new Proxy(array, {
  set(target, property, value) {
    console.log(
      `The changing property is ${property} and the changing value is ${value}`,
    );
    target[property] = value;
    return true;
  },
});

arrayProxy.push(100);
arrayProxy.push(200);

//No need to define for specific property

const person2 = {};
Object.defineProperties(person2, 'name', {
  get() {
    console.log('Name 被访问');
    return person._name;
  },
  set(value) {
    console.log('name 被设置');
    person._name = value;
  },
});

person.name = 'jack';
