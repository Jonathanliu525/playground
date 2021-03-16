#!/usr/bin/env node

//Linux need to change the file to 755

//Design for scaffolding
//Step1. interact with user
//Step2. generated file

const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

inquirer
  .prompt([
    { type: 'input', name: 'name', message: 'Please give a  Project Name' },
  ])
  .then((answer) => {
    //template folder
    const tmplDir = path.join(__dirname, 'templates');
    //destination
    const destDir = process.cwd();

    fs.readdir(tmplDir, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        ejs.renderFile(path.join(tmplDir, file), answer, (err, result) => {
          if (err) throw err;
          fs.writeFileSync(path.join(destDir, file), result);
        });
      });
    });
  });
