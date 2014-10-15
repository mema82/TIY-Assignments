var assert = require('chai').assert
var expect = require('chai').expect



//multi-dimensional array

var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));

var moves = {
//White Queens Pawn moves up 2 spots

step1: function() {
board[4][3] = board [6][3];
board[6][3] = ' ';
},

step2:
console.log(board)

//Black Queens pawn moves forward 2 spots
step3: board[3][3] = board[1][3]
step4: board[1][3] = ' ',

//White Knight moves up 2 spots and over 1
step5: board[5][5] = board[7][6],
step6: board[7][6] = ' ',

//Black Pawn moves up 1 spot
step7: board[2][4] = board[1][4],
step8: board[1][4] = ' ',

//White Knight Pawn moves up 1 spot
step9: board[5][6] = board[6][6],
step10: board[6][6] = ' ',

//Black Bishop moves diagnol down and left 1 spot
step11: board[1][4] = board[0][5],
step12: board[0][5] = ' ',

//White Bishop's Pawn moves up 2 spots
step13: board[4][2] = board[6][2],
step14: board[6][2] = ' ',

//Black Knights move over 1 spot and down 2
step15: board[2][5] = board[0][6],
step16: board[0][6] = ' ',

//White Bishop moves diagnol up and right 1 spot
step17: board[6][6] = board[0][6],
step18: board[7][5] = ' '

}

console.log(board.join('\n));


describe('Testing the board state' function(){
  it('After Move 1, the board should look like:', function(){
    moves.step1();

    assert.deepEqual (board,
      [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    )
  });



it('after Move 2, the board should look like', function(){
  moves.step2();

  assert.deepEqual(board,
    [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P',' ','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ','P',' ',' ',' ',' '],
      [' ',' ',' ','p',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p',' ','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ]
    )
  });
