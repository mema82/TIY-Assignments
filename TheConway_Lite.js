var assert = require('assert'); //This is required to run the unit testing.

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';
    assert.strictEqual(actual, expected);
    console.log(success)
}

       

function conway(board, col, row){ //This gives the state of current cells.

var cellState = board[col][row];

var neighbors = neighborsOf(board,col,row); //This gives neighborsOf array a variable.

var liveNeighbors=0; //This starts counter at zero

for (i = 0; i < neighbors.length; i++){
    if (neighbors[i] === true)
    liveNeighbors++;
}

console.log('Cell ('+cellState+') '+col+','+row+' has '+liveNeighbors+' live neighbors.')

if (cellState===true){ 

if (liveNeighbors < 2){
    return false;    //end of rule #1
}
else if (liveNeighbors===2 || liveNeighbors===3){
    return true;
}                     //end of rule#2
else{
    return false;
}
}else{
    if (liveNeighbors===3){
        return true;
    }else{
        return false;       //end of rule #3
    }
    }
    }

function neighborsOf(board,col,row){ //returns state of nearest neighbor.

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
    return[
        board[0][1],board[1][1],board[1][2]
        ];
    
}

if (col===1 && row===0){
    return [
        board[0][0],board[0][1],board[1][1],board[2][0],board[2][1]
        ];
    
}

if (col ===1 && row===1){
    return [
        board[0][0],board[0][1],board[0][2],
        board[1][0],board[1][2],board[2][0],
        board[2][1],board[2][2]
        ];
        
}
if (col===1 && row===2){
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
        
 //This tick function applies conways game of life rules and then returns a new board after each tick.
 
 function tick(board){   //This array will hold updates values from board.
        
    var arrNextBoard = []; 
    
 for (var i = 0; i < board.length; i++){ //This will loop through board columns.
  
  for (var j = 0; j < board[i].length; j++){  //This will loop through board rows.
  
   console.log(i+','+j+' return: '+conway(board,i,j));     
  }
 }
 }
        
 var testing =[
     [
         [true, true, true ],
         [false, true, false],
         [false, false, true],
    ]
    ];
 
    
    console.log(testing[0][0]);
    console.log(tick(testing[0][0]));
    console.log(tick(testing[0][0]));
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
