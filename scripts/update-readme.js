const fs = require('fs');

const readmePath = './README.md'
const package = require('../package.json');


const readme = fs.readFileSync(readmePath).toString();

const regex = /createloop@+\d.+\d.+\d\//

const updatedReadme = readme.replace(regex, `createloop@${package.version}/`)

// console.log(readme);

fs.writeFileSync(readmePath, updatedReadme);

console.log(`updated readme script tag to ${package.version}`);

// const str = "https://unpkg.com/p5.createloop@0.0.21/dist/p5.createloop.js"
// const newStr = str.replace(regex, `@0.0.0/`)

// console.log(str);
// console.log(newStr);