const fs = require('fs');
const catArray = require('./bash').catArray;
let content;

module.exports = fs.readFile(catArray[1], (err, data) => {
  if(err) throw err;
  content = data;
  processFile();
})

function processFile() {
  console.log(content.toString());
}
