// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires aftter a user types in a line
process.stdin.on('data', (input) => {
  const cmd = input.toString().trim(); // remove the newline
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  }

//  process.stdout.write('You typed: ' + cmd);
//  process.stdout.write('\nprompt > ');
});
