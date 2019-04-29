const fs = require('fs');

const readmePath = './README.md'
const package = require('../package.json');


const readme = fs.readFileSync(readmePath).toString();

const updatedReadme = readme.replace("p5.createloop@latest", `p5.createloop@${package.version}`)
fs.writeFileSync(readmePath, updatedReadme);

console.log(`updated readme script tag to ${package.version}`);