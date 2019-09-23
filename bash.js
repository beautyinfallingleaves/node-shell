// Output a prompt
//process.stdout.write('> ');

// The stdin 'data' event fires aftter a user types in a line
process.stdin.on('data', (input) => {
  const cmd = input.toString().trim(); // remove the newline
  if (cmd === 'pwd') {
    require('./pwd');
  }
  else if (cmd === 'ls') {
    require('./ls');
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }

});
