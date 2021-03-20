//Iterator Pattern

//scenario: you and me work on a same todo list application

//my code
const todos = {
  life: ['eat', 'sleep'],
  study: ['Eng', 'Math'],
};

//your code

for (const item of todos.life) {
  console.log(item);
}

for (const item of todos.study) {
  console.log(item);
}

//if I change the data structure, then you code need to change as well, like

//my new code
todos['work'] = ['react', 'express'];

//your new code

for (const item of todos.work) {
  console.log(item);
}

//To solve that problem, the bette way is that, I provide a interface for you to get access to all the data
todos['each'] = function (callback) {
  const all = [].concat(this.life, this.study, this.work);
  for (const item of all) {
    callback(item);
  }
};

console.log('====each function');

todos.each(console.log);

//iterator way
todos[Symbol.iterator] = function () {
  const all = [...this.life, ...this.study, ...this.work];
  let index = 0;
  return {
    next: function () {
      result = { value: all[index], done: index >= all.length };
      index++;
      return result;
    },
  };
};

console.log('======iterator way');

for (const item of todos) {
  console.log(item);
}

//核心是对外提供方法,不用担心内部的结构
