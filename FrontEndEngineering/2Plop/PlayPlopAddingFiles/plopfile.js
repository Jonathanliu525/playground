module.exports = (plop) => {
  // create your generators here
  plop.setGenerator('controller', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please give a controller name',
      },
      {
        type: 'input',
        name: 'age',
        message: 'Please give a age',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}.js',
        templateFile: 'plop-templates/controller.hbs',
      },
    ], // array of actions
  });
};

// run yarn plop controller to test
