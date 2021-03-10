//这个文件是Generator的核心入口
//需要导出一个继承自Yeoman Generator的类型
//Generator会自动调用我们在此类型中定义的一些生命周期方法
//我们在这些方法中可以通过调用父类提供的一些工具方法来实现一些功能

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Next, add your custom code
    this.option('babel'); // This method adds support for a `--babel` flag
  }
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }
  writing() {
    this.fs.write(this.destinationPath('temp.txt'), Math.random().toString());
  }

  writingTemplate() {
    const tmpl = this.templatePath('readme.me');
    const outPut = this.destinationPath('readme.me');
    const context = { title: 'Hello Front-end', success: false };
    this.fs.copyTpl(tmpl, outPut, context);
  }
};
