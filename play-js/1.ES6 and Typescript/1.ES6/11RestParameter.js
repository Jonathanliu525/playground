//old way

function foo() {
  console.log(arguments);
}

foo('jon', 'jen', 'cde');

// [Arguments] { '0': 'jon', '1': 'jen', '2': 'cde' }

//es6
function fooES6(...args) {
  console.log(args);
}

fooES6('jon', 'jen', 'cde');
