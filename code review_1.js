var assert = require('assert'); //This is required to run the unit testing.

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';
    assert.strictEqual(actual, expected);
    console.log(success)
}

board =[
     [
         [true,  true, false],
         [false, true, false],
         [false, true, true ],
    ]
    ];  
    
var neighbors;     
function neighborsOf(board,col,row){   //This function accepts a board and coordinates of a cell and returns list (Array) of neighboring cells.   
}

if (col===0 && row===0){
    return [
    board[0][1],board[1][0],board[1][1]
    ];
}

if (col===0 && row===1){
    return[
        board[0][0],board[1][0],board[1][1],board[1][2],board[0][2]
    ];
}

if (col===0 && row===2){
    return [
        board[0][1],board[1][1],board[1][2]
        ];
    
}

if (col===1 && row===0) {
    return [
        board[0][0],board[0][1],board[1][1],board[2][0],board[2][1]
        ];
    
}

if (col ===1 && row===1) {
    return [
        board[0][0],board[0][1],board[0][2],
        board[1][0],board[1][2],board[2][0],
        board[2][1],board[2][2]
        ];
        
}
if (col===1 && row===2) {
    return [
        board[0][1],board[0][2],board[1][1],board[2][1],board[2][2]
        ];
}
  if (col===2 && row===0){
      return [
    board[1][0],board[1][1],board[2][1]      
          ];
  }      
        
   if (col===2 && row===1){     
      return [
          board[1][0],[1][1],board[1][2],board[2][0],board[2][2]
          ];
   }
   if (col===2 && row===2){
       return [
           board[1][1],board[1][2],board[2][1]
          ];
   }

return neighbors;

