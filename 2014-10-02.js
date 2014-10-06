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

function conway(col, row){ //

var cellState = board[col][row];//gives state of cell whr given input values.

var neighbors = neighborsOf(board,col,row); //input teh boards col and row to get list of neighbors.


for ( i = 0; i < neighbors.length; i ++) {
    if (neighbors [i] === true)
    liveNeighbors++;
} 

if (cellState===true){ //These are the rules of conway.

if (liveNeighbors < 2){
    return false;    
}
else if (liveNeighbors===2 || liveNeighbors===3){
    return true;
}                     
else{
    return false;
}
}else {
    if (liveNeighbors >3) {   
        return true;
    }else {
        return false; 
    }
    }
    }
    
    

function neighborsOf(board,col,row){ //These are the individual index numbers

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
}
        

        
//This reads my boards index for boolean values.   
console.log(board[0][0]);
console.log(board[0][1]);
console.log(board[0][2]);

//