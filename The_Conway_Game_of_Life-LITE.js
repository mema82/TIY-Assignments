var expect = require('chai').expect;

//Initial Board State

var board = [
    [ false,false,false ],
    [ false,false,false ],
    [ false,false,false ],
         ]
        
//Checks Neighbors to see if cell state is dead or alive


var cellstate = false;
function conway(cell,neighbors) {
    var liveCells = 0;
    neighbors.forEach(function(value, index) {
        if (value === true) {
            liveCells++;
        }
    
    if (cell === true) {
        if (liveCells < 2) {
            cellstate = false;
        }
        
    else if (liveCells < 4) {
        cellstate= true;
    }
    else if (liveCells > 3) {
        cellstate = false;
    }
    
else {
    if (liveCells === 3) {
        cellstate= true;
}
else { cellstate = false;
}

    return cellstate;
}

//Declares the neighbors of a cell

var neighbors = [];
function neighborsOf(board, x, y) {
    if (x === 0 && y === 0) {
        neighbors - [board[0][1], board[1][0], board[1][1]]
    }

    if (x === 0 && y === 1) {
        neighbors = [board[0][0] ,board [1][0], board[1][1], board[1][2],board[0][2]]
    }
 
  if (x === 0 && y === 2) {
      neighbors = [board[0][1],board[1][1],board[1][2]]
  }
        
  if (x === 1 && y === 1) {
      neighbors = [board[0][0], board[1][0], board[2][0], board[0][1], board[2][1], board[0][2], board[1][2], board[2][2]]
  }
  
  if (x === 1 && y === 2) {
      neighbors = [board[0][1], board[0][2], board[1][1], board[2][1],board[2][2]] 
  }
        
   if (x === 2 && y === 0) {
       neighbors = [board[1][0],board[1][1],board[2][1]]
   }    
        
    if (x === 2 && y === 1) {
        neighbors= [board[2][0], board[1][0],board[1][1],board[1][2], board[2][2]]
    }
 
    if (x === 2 && y === 1) {
        neighbors = [board[2][0], board[1][0],board[1][1],board[1][2],board[2][2]]
        
    }
    
    if (x === 2 & y === 2) {
        neighbors = [board[2][1],board[1][1],board[1][2]]
    }
    
    return neighbors;
    
}

neighbors.forEach(conway);

//TICK function to generate board of new arrays

function tick(board) {
    var newBoard = [];
    
  board.forEach(function(value, index) {
      value.forEach(function(x,y) {
          
    newBoard.push(conway(board[index][y], neighborsOf(board, index, y)));
    
  });

});

var row1 = newBoard.splice(0,3);
var row2 = newBoard.splice(0,3);
board = [row1, row2, newBoard];

    return board;
}

//Testing
var assert = require("assert");

function test(actual, expected, success) {
    
    if (success === undefined) success = 'Success!'; 
        
    assert.strictEqual(actual, expected);
    console.log(success);
}

 function ticktest(board) {
   var after = tick(board)
   console.log("-----------------------");
   console.log("-----------------------");
   console.log("-----------------------");

                    }
                }
            })
        };
// TEST FUNCTION
var assert = require('assert');

function test(actual, expected, success){
    if (success === undefined) success = 'Success!';
    assert.strictEqual(actual, expected);
    console.log(success);
}

//Tick Board test
function tick_test(board) {
  var after = tick(board)
  console.log("-----------------------");
  console.log(board);
  console.log("-----------------------");
  console.log(after);
  console.log("-----------------------");
}

//Test with variables and boards

var actual1 = neighborsOf(board, 0, 0)
var actual2 = neighborsOf(board, 0, 1)

var board2 = []

