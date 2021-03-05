//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const person = {
  name: 'jon',
  age: 18,
};

const personProxy = new Proxy(person, {
  get(target, property) {
    console.log(target, property);
  },
  set(target, property, value) {
    console.log(target, property, value);
  },
});

personProxy.name;
personProxy.age = 17;

//best practise

const personProxy2 = new Proxy(person, {
  get(target, property) {
    return property in target ? target[property] : 'default';
  },
  set(target, property, value) {
    if (property === 'age') {
      if (!Number.isInteger(value)) {
        throw new error('There is something wrong');
      }
    }
    target[property] = value;
  },
});

personProxy2.name2;
personProxy2.age = 'HAHA';
