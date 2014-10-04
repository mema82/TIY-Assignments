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

function neighborsOf(board,x,y){

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
    
if neighbors[i] === true)

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


var actual = neighborsOf(board,0 , 0)
var celltest = neighborsOf(board,cell 1, 0)
var celltest = neighborsOf(board, 2, 0)
var celltest = neighborsOf(board, 0,1 )
var celltest=neighborsOf(board, 1,1)
var celltest = neighborsOf(board 2,1)
var celltest = neighborsOf(board, 0, 2)
var celltest = neighborsOf(board, 1, 2)
var celltest = neighborsOf(board, 2, 2)

var con1test = conway(board[0][0] , actual)
var con2test = conway(board[1][0] , con2test)
var con3test = conway(board[2][0], con3test)
var con4test = conway(board[0][1], con4test)
var con5test = conway(board[1][1], con5test)
var con6test = conway(board[2][1], cont6test)
var con7test = conway(board[0][2], con7test)
var con8test = conway(board[1][2], con8test)
var con9test = conway(board[2][2], con9test)













