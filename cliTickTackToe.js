const stdin = process.stdin;
const stdout = process.stdout;
let gameOver = false;
let currentPlayer = 1;

let one = '1';
let two = '2';
let three = '3';
let four = '4';
let five = '5';
let six = '6';
let seven = '7';
let eight = '8';
let nine = '9';

const slots = [one, two, three, four, five, six, seven, eight, nine];

let prompt  = callback => {
  stdin.resume();

  stdout.write(one, two, three, '\n', four, five, six, '\n', seven, eight, nine, '\n');
  stdout.write('Player ', currentPlayer, `: Select a numbered square to place your ${currentPlayer === 1 ? 'X' : 'O'}`);


  stdin.once('data', data => {
    if (slots.indexOf(data) !== -1) {
      callback(data.toString().trim());
    } else {
      callback('invalid move');
    }
  })
}


const Game = () => {
  while (!gameOver) {
    prompt(string => {
      if (string === 'invalid move') {
        
      }
    })
  }
}


prompt(string => {
  stdout.write('Made it into callback');
});