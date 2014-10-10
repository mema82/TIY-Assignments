var expect = require('chai').expect;

// This holds the value for the 3 required parameters to be passed

var cell = function(board,row,col){
    var cell = this;
    this.status = false;
    this.row = row;
    this.col = col;
    this.distance = function(cell){
        
        
// This returns my absolute numeber from the arguement and adds it to the absolute number of the second arguement. 
        
        return Math.abs(cell.row - this.col) + Math.abs(cell.row - this.row); 
    };
    }
// This initiates my counter

this.neighborsOf = 0;

/*This checks for my neighbors state and uses the filter function
This assigns the neighbors
function that accepts up to three arguments. 
The filter method calls the callbackfn function 
one time for each element in the array*/

this.cellstate = function(){
    
    return this.neighborsOf.filter(function(cell){
        
        return cell.status;
    }
).length;
};

return this;

// This reps the the new board

var board = function(w,h){
    
    var board = this;
    var col = newBoard(w*h);

    var live = [];
    
for(var i = 0; i < w; i++){
    for(var J = 0; j < h; j++){
        (function(){
            col[i+j*w] = new cell(i, j, col);
        });
    }
};


col.forEach(function(cell){
    cell.neighborsOf = col.filter(function(cell2){
var dx = Math.abs(cell2.board - cell.board);
var dy = Math.abs(cell2.row - cell.row);
    
    return (dx === 1 && dy === 1) || (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
    });
});

this.filter = function(cellnum){
    
    return col.filter(cellnum);
};

this.newLife = function(){

// Rule # 3: Any live cell with more than three live neighbours dies, as if by overcrowding
    var deadOp = col.filter(function(cell){
        
        return cell.status && (cell.neighborsOf() > 3);
    });
    
// Rule # 1: ny live cell with fewer than two live neighbours dies, as if caused by under-population
    var deadUp = col.filter(function(cell){
        
        return col.status && (cell.neighborsOf() < 2);
    })
        
}

// Rule #4: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
var liveRep = col.filter(function(cell){
    
    return !cell.status && cell.neighborsOf() === 3;
});

//Rule # 2: ny live cell with two or three live neighbours lives on to the next generation

var nextGen = col.filter(function(cell){
    
    return cell.status && (cell.neighborsOf() === 2 || cell.neighborsOf() === 3);
});
// This concat prototype returns new array along with the array provided in arguement
deadOp.concat(deadOp).forEach(function(cell){
    
    cell.status = false;

});

liveRep.forEach(function(cell){
    
    cell.status = true;
    
});

nextGen.forEach(function(cell){
    
    cell.status = true;
    
});

this.getCell = function(row,col){
    
    return col[x+y*w];
};

return this;
}

it('result should be false,')
expect(cell.this.status).to.be.a('false');

