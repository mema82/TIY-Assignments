//Conways Game of life_Lite

//This tells roobot that assert is required.

var assert = require('assert');

// This tells robot it there is a successful statement print 'it's alive' 

function test (actual, expected, success){
    if (success===undefined) success = 'true';
    assert.strictEqual (actual, expected);
    
}

// This tells robot you have a board representing 3x3 and it holds an array of boolean values.

var board= [

    [false, false, false ],
    [false, false, false ],
    [false, false, false ],
    ];

var neighbors;

function neighborsOf(board,col,row){

if (x===0 && y===0){
    
    neighbors= [board [0][1], board[1][0],board[1][1]];
    
if (x===0 && y===1){
    
    neighbors = [board[0][0], board[1][0],board[1][1], board[1][2],board[0][2]];
}

if (x===0 && y===2){
    
    neighbors=[board[0][1], board[1][1], board[1][2]];
}

if (x=== 1 && y===0) {
    
    neighbors = [board[0][0],board[0][1],board[1][1],board[2][1],board[2][0]];
}

if (x=== 1 && y===1) {
    
    neighbors =[board [0][0],board[1][0],board[2][0],board[0][1],board[2][1],board[0][2],board[1],[2],board[2][2]]
    
}

if (x===1 && y===2) {
    
    neighbors=[board[0][1], board[0][2],board[1][1],board[2][1],board[2][2]]
}

if (x=== 2 && y=== 0){
    
    neighbors=[board[1][0],board[1][1],board[2][1]]
}

if (x===2 && y===1) {
    
    neighbors-[board[2][0],board[1],[0],board[1][1],board[1][2],board[2][2]]
}

if (x===2 && y===2){
    
    neighbors=[board[2][1],board[1][1],board[1][2]]
}
}
return neighbors;
}

var newCell;

function conway(cell,neighbors){
    
    var livingCell = 0;
    
for (var i=0; i< neighbors.length; i++){
    
if (neighbors[i] === true)

livingCell++;
}
}

if (cell ===true){
    
    if (livingCell < 2){
        
        newCell= false;
    }
if (livingCell ===2 || livingCell ===3) {

newCell= true;}

if (livingCell > 3){
    
    newCell= false;
}
}

if (cell=== false){
    
    newCell=true;
}


else{
    
    newCell=false;
}

return newCell
















