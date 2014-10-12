var assert = require('assert');

function test(actual, expected, success){
    if (success === undefined) success = 'Success!';
    assert.strictEqual(actual, expected);
    console.log(success);
}

/*
 [ false,true,false ],
 [ false,true,false ],
 [ false,true,true  ],

*/

//Initial Board State

var board = [
    [0][0], [0][1],[0][2],
    [1][0], [1][1],[1][2],
    [2][0], [2][1],[2][2],
            ]


//Making each cell of data its own object with its own properties identifying the numner of liveNeighbors

var newBoard = new Array( );

newBoard[newBoard.length] = {cell:"[0][0]",  value: "false", liveNeighbors:  "2" }; 
newBoard[newBoard.length] = {cell:"[0][1]",  value: "true",  liveNeighbors:  "1" };
newBoard[newBoard.length] = {cell:"[0][2]",  value: "false", liveNeighbors:  "2" };
newBoard[newBoard.length] = {cell:"[1][0]",  value: "false", liveNeighbors:  "3" };
newBoard[newBoard.length] = {cell:"[1][1]",  value: "true",  liveNeighbors:  "3" };
newBoard[newBoard.length] = {cell:"[1][2]",  value: "false", liveNeighbors:  "4" };
newBoard[newBoard.length] = {cell:"[2][0]",  value: "false", liveNeighbors:  "2" };
newBoard[newBoard.length] = {cell:"[2][1]",  value: "true",  liveNeighbors:  "2" };
newBoard[newBoard.length] = {cell:"[2][2]",  value: "true",  liveNeighbors:  "2" };



for (var i = 0; i < newBoard.length; i++) {
    newBoard[newBoard[i].value + "_" + newBoard[i].cell] = newBoard[i];
    
}

 return new Array();   

//console.log(newBoard.newArray([]), 'empty arrays are arrays');

//console.log(newBoard["cell_[0][0]"]);
//console.log(newBoard["cell_[0][1]"]);


//expect.newBoard.newBoard.length.cell[0][1].liveNeighbors.to.be.number;

