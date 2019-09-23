// Output a prompt
process.stdout.write('> ');

// The stdin 'data' event fires aftter a user types in a line
process.stdin.on('data', (input) => {
  const cmd = input.toString().trim(); // remove the newline
  if (cmd === 'pwd') {
    require('./pwd');
    process.stdout.write('\n> ');
  }
  else if (cmd === 'ls') {
    require('./ls');
  } else if (cmd.substring(0,3) === 'cat') {
    const inputArr = cmd.split(' ');
    module.exports.catArray = inputArr;
    require('./cat');
    process.stdout.write('\n> '); // WHY DOESNT THIS WORK?
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\n> ');
  }


});
