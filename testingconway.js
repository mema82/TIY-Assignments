var assert = require('assert');  //This is required to run the unit testing.

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';
    assert.strictEqual(actual, expected);
    console.log(success)
}

var board =[
     [
         [false,false,true],
         [true, true, true],
         [false, true,true],
    ]
    ];
    
function conway(cell, neighbors){ //Applies the rules.

if (liveNeighbors < 2){
    return false;    
}
else if (liveNeighbors===2 || liveNeighbors===3){
    return true;
}                     
else{
    return false;
}
} ; {
   if (liveNeighbors > 3) {   
        return true;
    }else {
        return false; 
    }
    }
var liveNeighbors=0;     
function neighborsOf(board,col,row){   //input coordinates to return list of neighboring cells.

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

function tick (board){   //This array will hold updates values from board.
        
var newBoard = []; 
    
 for (var i = 0; i < board.length; i++){ //This will loop through board columns.
  
  for (var j = 0; j < board[i].length; j++){  //This will loop through board rows.
  

for ( i = 0; i < neighbors.length; i ++) {  //This starts counter at zero
    if (neighbors [i] === true)
    liveNeighbors++;
} 












var cellState = board[col][row];





//if (cellState===true){


        
 //This tick function applies conways game of life rules and then returns a new board after each tick.
 
 
  
  
  }
 }
 }
        
 //This reads my boards index for boolean values.   


console.log(conway(false,[0][1],[1][1]));


    








    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
